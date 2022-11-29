using TubeTimes.Api.Models.TfLTypes;

namespace TubeTimes.Api.Models.DTO
{
    public class LineRouteResponse
    {
        public LineRouteResponse()
        {
            OrderedLineRoutes = new();
        }

        public string LineId { get; set; }
        public string LineName { get; set; }
        public string Direction { get; set; }
        public bool IsOutboundOnly { get; set; }
        public string Mode { get; set; }
        public List<OrderedLineRouteResponse> OrderedLineRoutes { get; set; }
    }
}
