namespace TubeTimes.Api.Models
{
    public class Line
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string ModeName { get; set; }
        public DateTime Created { get; set; }
        public DateTime Modified { get; set; }
        public List<LineStatus> LineStatuses { get; set; }
        public List<ServiceType> ServiceTypes { get; set; }
    }
}
