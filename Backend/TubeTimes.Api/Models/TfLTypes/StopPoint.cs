namespace TubeTimes.Api.Models.TfLTypes
{
    public class StopPoint
    {
        public StopPoint()
        {
            Modes = new();
            Lines = new();
        }

        public string ParentId { get; set; }
        public string StationId { get; set; }
        public string IcsId { get; set; }
        public string TopMostParentId { get; set; }
        public List<string> Modes { get; set; }
        public string StopType { get; set; }
        public string Zone { get; set; }
        public List<Line> Lines { get; set; }
        public bool Status { get; set; }
        public string Id { get; set; }
        public string Name { get; set; }
        public double Lat { get; set; }
        public double Lon { get; set; }
        public bool? HasDisruption { get; set; }
        public bool IsInterchange { 
            get 
            {
                return Lines.Count > 0 || Modes.Contains("national-rail");
            } 
        }
    }
}