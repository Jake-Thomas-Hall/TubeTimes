using TubeTimes.Api.Models.TfLTypes;

namespace TubeTimes.Api.Models.DTO
{
    public class ArrivalPlatformResponse
    {
        public ArrivalPlatformResponse()
        {
            Arrivals = new();
        }

        public string PlatformName { get; set; }
        public List<Arrival> Arrivals { get; set; }
    }
}