using System.Runtime.CompilerServices;
using TubeTimes.Api.Interfaces;
using TubeTimes.Api.Models.DTO;
using TubeTimes.Api.Models.TfLTypes;

namespace TubeTimes.Api.API
{
    public class TfLAPI : ITfLAPI
    {
        private readonly IRequestManager _requestManager;

        public TfLAPI(IRequestManager requestManager)
        {
            _requestManager = requestManager;
        }

        public async Task<List<Line>> GetLines(string? search)
        {
            // Cache result for 20 minutes, no need to query from TfL often
            var result = await _requestManager.GetDataAsync<List<Line>>("Line/Mode/tube,dlr,overground,elizabeth-line,tram", useCache: true, cacheKey: "getLines", cacheTimeoutSeconds: 1200);

            // Simple where to find any lines that contain the matching search query.
            if (!string.IsNullOrWhiteSpace(search) && !string.IsNullOrEmpty(search))
            {
                result = result.Where(x => x.Name.ToUpper().Contains(search.ToUpper())).ToList();
            }

            return result;
        }

        public async Task<List<Line>> GetLineStatuses()
        {
            // Find lines, but include status details
            var result = await _requestManager.GetDataAsync<List<Line>>("Line/Mode/tube,dlr,overground,elizabeth-line,tram/Status", useCache: true, cacheKey: "getLineStatus");

            // Order the returned statuses for each line, lowest severity first
            foreach (var line in result)
            {
                line.LineStatuses = line.LineStatuses.OrderBy(x => x.StatusSeverity).ToList();
            }

            // Order overall results by the first (therefore lowest for each line) status severity level
            result = result.OrderBy(x => x.LineStatuses.FirstOrDefault()?.StatusSeverity).ToList();

            return result;
        }

        public async Task<LineRouteResponse> GetLineRoute(string line, string direction)
        {
            var lineRouteResponse = new LineRouteResponse();

            // Set line and direction into route
            var result = await _requestManager.GetDataAsync<LineRoute>($"Line/{line}/Route/Sequence/{direction}", new()
            {
                { "serviceTypes", "Regular,Night" },
                { "excludeCrowding", "true" }
            }, useCache: true, cacheKey: $"getLineRoute-{line}-{direction}", cacheTimeoutSeconds: 1200);

            // Get all lines for the modes we are considering, so that this can be used to filter the lines on stop points
            var lines = await GetLines(null);

            // Remove the line we are considering so it doesn't intersect later on
            lines = lines.Where(x => x.Id != line).ToList();

            lineRouteResponse.Direction = result.Direction;
            lineRouteResponse.LineName = result.LineName;
            lineRouteResponse.LineId = result.LineId;
            lineRouteResponse.IsOutboundOnly = result.IsOutboundOnly;
            lineRouteResponse.Mode = result.Mode;

            // Find all distinct stops within the stop sequences
            var allDistinctStops = result.StopPointSequences.SelectMany(x => x.StopPoint).DistinctBy(x => x.Id).ToList();

            // Filter lines down for each stop point to only those with Id's that are within the lines being considered by the system
            foreach (var stoppoint in allDistinctStops)
            {
                // Larger stations within stop sequences can have parent stations, need to look these up and merge in the lines/modes from them to
                // get a full picture of the possible interchanges...
                if (!string.IsNullOrEmpty(stoppoint.ParentId))
                {
                    var parent = result.Stations.FirstOrDefault(x => x.Id == stoppoint.ParentId);

                    // Frustratingly, it is also possible for the parentId to not be found or valid, in these cases the topmostparent should be used
                    // to find the real parent stop
                    if (stoppoint.Id != stoppoint.TopMostParentId)
                    {
                        parent = result.Stations.FirstOrDefault(x => x.Id == stoppoint.TopMostParentId);
                    }

                    if (parent is not null)
                    {
                        stoppoint.Modes = stoppoint.Modes.Union(parent.Modes).ToList();
                        stoppoint.Lines = stoppoint.Lines.UnionBy(parent.Lines, x => x.Id).ToList();
                    }
                }

                // Filter out all the lines apart from the ones that we care about
                stoppoint.Lines = stoppoint.Lines.IntersectBy(lines.Select(x => x.Id), x => x.Id).ToList();
            }

            // For each line route, find the stops from all distinct stops
            foreach (var orderedLineRoute in result.OrderedLineRoutes)
            {
                var stopPoints = allDistinctStops.IntersectBy(orderedLineRoute.NaptanIds, x => x.Id).ToList();

                // Sometimes intersect by messes up the order, this reorders the new list of stop ids by the original list
                var orderCheck = from x in orderedLineRoute.NaptanIds
                                 join y in stopPoints on x equals y.Id
                                 select y;

                lineRouteResponse.OrderedLineRoutes.Add(new()
                {
                    Name = orderedLineRoute.Name,
                    ServiceType = orderedLineRoute.ServiceType,
                    StopPoints = orderCheck.ToList()
                });
            }

            // Add additional synthetic 'route' of all stops from A-Z for both regular and night (if there are any)
            // Note how these lists are just used to intersect, so that the stops with the processes lines are returned instead
            var allRegularStops = result.StopPointSequences.Where(x => x.ServiceType == "Regular").SelectMany(x => x.StopPoint).DistinctBy(x => x.Id).ToList();
            var allNightStops = result.StopPointSequences.Where(x => x.ServiceType == "Night").SelectMany(x => x.StopPoint).DistinctBy(x => x.Id).ToList();

            // Always add the regular A-Z route
            lineRouteResponse.OrderedLineRoutes.Add(new() { Name = "A &harr; Z (All stations)", ServiceType = "Regular", StopPoints = allDistinctStops.IntersectBy(allRegularStops.Select(x => x.Id), x => x.Id).OrderBy(x => x.Name).ToList() });
            
            // Only add the night A-Z route if any night service stops were found.
            if (allNightStops.Any())
            {
                lineRouteResponse.OrderedLineRoutes.Add(new() { Name = "A &harr; Z (All stations)", ServiceType = "Night", StopPoints = allDistinctStops.IntersectBy(allNightStops.Select(x => x.Id), x => x.Id).OrderBy(x => x.Name).ToList() });
            }

            return lineRouteResponse;
        }
    }
}
