using TubeTimes.Api.Models;

namespace TubeTimes.Api.Interfaces
{
    public interface ITfLAPI
    {
        /// <summary>
        /// Gets list of lines by modes that are specified, with status information
        /// </summary>
        /// <returns></returns>
        Task<List<Line>?> GetLineStatuses(); 
    }
}
