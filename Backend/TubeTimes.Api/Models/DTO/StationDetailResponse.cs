using TubeTimes.Api.Models.TfLTypes;

namespace TubeTimes.Api.Models.DTO
{
    public class StationDetailResponse
    {
        public StationDetailResponse()
        {
            Modes = new();
            Lines = new();
            LinePlatforms = new();
        }

        public string NaptanId { get; set; }
        public List<string> Modes { get; set; }
        public string? HubNaptanCode { get; set; }
        public List<Line> Lines { get; set; }
        public string Id { get; set; }
        public string CommonName { get; set; }
        public List<LinePlatform> LinePlatforms { get; set; }
    }
}
