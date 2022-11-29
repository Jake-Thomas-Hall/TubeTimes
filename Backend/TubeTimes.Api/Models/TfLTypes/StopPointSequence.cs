namespace TubeTimes.Api.Models.TfLTypes
{
    public class StopPointSequence
    {
        public string LineId { get; set; }
        public string LineName { get; set; }
        public string Direction { get; set; }
        public int BranchId { get; set; }
        public List<int> NextBranchIds { get; set; }
        public List<int> PrevBranchIds { get; set; }
        public List<StopPoint> StopPoint { get; set; }
        public string ServiceType { get; set; }
    }
}