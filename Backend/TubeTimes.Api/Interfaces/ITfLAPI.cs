using TubeTimes.Api.Models;

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
        
    }
}
