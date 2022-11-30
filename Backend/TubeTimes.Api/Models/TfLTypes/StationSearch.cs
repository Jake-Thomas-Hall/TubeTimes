namespace TubeTimes.Api.Models.TfLTypes
{
    public class StationSearch
    {
        public StationSearch()
        {
            Matches = new();
        }

        public string Query { get; set; }
        public int Total { get; set; }
        public List<StationMatch> Matches { get; set; }
    }
}
