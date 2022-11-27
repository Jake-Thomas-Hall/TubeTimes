using System.Runtime.CompilerServices;
using TubeTimes.Api.Interfaces;
using TubeTimes.Api.Models;

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
    }
}
