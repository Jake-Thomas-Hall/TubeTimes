namespace TubeTimes.Api.Models.TfLTypes
{
    public class OrderedLineRoute
    {
        public string Name { get; set; }
        public List<string> NaptanIds { get; set; }
        public string ServiceType { get; set; }
    }
}
