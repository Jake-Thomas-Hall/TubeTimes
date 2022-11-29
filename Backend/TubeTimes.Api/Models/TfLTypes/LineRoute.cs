namespace TubeTimes.Api.Models.TfLTypes
{
    public class LineRoute
    {
        public string LineId { get; set; }
        public string LineName { get; set; }
        public string Direction { get; set; }
        public bool IsOutboundOnly { get; set; }
        public string Mode { get; set; }
        public List<string> LineStrings { get; set; }
        public List<Station> Stations { get; set; }
        public List<StopPointSequence> StopPointSequences { get; set; }
        public List<OrderedLineRoute> OrderedLineRoutes { get; set; }
    }
}
