using TubeTimes.Api.Models.DTO;
using TubeTimes.Api.Models.TfLTypes;

namespace TubeTimes.Api.Interfaces
{
    public interface ITfLAPI
    {
        /// <summary>
        /// Returns details of lines, without status/disruption/route details - can be used to find lines by string
        /// </summary>
        /// <param name="search">The provided search string (e.g. Bakerloo)</param>
        /// <returns>List of type <c>Line</c></returns>
        Task<List<Line>> GetLines(string? search);

        /// <summary>
        /// Gets list of lines by modes that are specified, with status information
        /// </summary>
        /// <returns></returns>
        Task<List<Line>> GetLineStatuses();

        /// <summary>
        /// Gets a line and all of it's corresponding routes
        /// </summary>
        /// <param name="line">id of the line, e.g. <c>district</c></param>
        /// <param name="direction"><c>inbound</c> or <c>outbound</c></param>
        /// <returns>Line with it's corresponding routes, statuses, stopoint Id's and interconnections</returns>
        Task<LineRouteResponse> GetLineRoute(string line, string direction);

        /// <summary>
        /// Get the details of a station, for use on the station details page.
        /// Arrivals need to be queried for a station as well.
        /// </summary>
        /// <param name="stationId">Station Id e.g. 940GZZLUWLO is a station code for Waterloo</param>
        /// <returns>Details for a station: note that Hub stations can be returned as well</returns>
        Task<StationDetailResponse> GetStationById(string stationId);
    }
}
