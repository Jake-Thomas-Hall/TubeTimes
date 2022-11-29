namespace TubeTimes.Api.Models.TfLTypes
{
    public class Line
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public DateTime Created { get; set; }
        public DateTime Modified { get; set; }
        public List<LineStatus> LineStatuses { get; set; }
        public List<ServiceType> ServiceTypes { get; set; }
    }
}
