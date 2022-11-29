using TubeTimes.Api.Models.TfLTypes;

namespace TubeTimes.Api.Models.DTO
{
    public class OrderedLineRouteResponse
    {
        public OrderedLineRouteResponse()
        {
            StopPoints = new();
        }

        public string Name { get; set; }
        public List<StopPoint> StopPoints { get; set; }
        public string ServiceType { get; set; }
    }
}