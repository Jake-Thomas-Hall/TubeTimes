namespace TubeTimes.Api.Models.TfLTypes
{
    public class StationMatch
    {
        public string IcsId { get; set; }
        public List<string> Modes { get; set; }
        public string Zone { get; set; }
        public string Id { get; set; }
        public string Name { get; set; }
        public double Lat { get; set; }
        public double Lon { get; set; }
        public string TopMostParentId { get; set; }
    }
}