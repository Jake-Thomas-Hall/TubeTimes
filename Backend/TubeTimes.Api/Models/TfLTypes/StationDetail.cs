namespace TubeTimes.Api.Models.TfLTypes
{
    public class StationDetail
    {
        public string NaptanId { get; set; }
        public List<string> Modes { get; set; }
        public string IcsCode { get; set; }
        public string StopType { get; set; }
        public string? HubNaptanCode { get; set; }
        public List<Line> Lines { get; set; }
        public bool Status { get; set; }
        public string Id { get; set; }
        public string CommonName { get; set; }
        public string PlaceType { get; set; }
        public List<StationDetailChild> Children { get; set; }
    }
}
