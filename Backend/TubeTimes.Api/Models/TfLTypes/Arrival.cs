namespace TubeTimes.Api.Models.TfLTypes
{
    public class Arrival
    {
        public string Id { get; set; }
        public int OperationType { get; set; }
        public string VehicleId { get; set; }
        public string NaptanId { get; set; }
        public string StationName { get; set; }
        public string LineId { get; set; }
        public string LineName { get; set; }
        public string PlatformName { get; set; }
        public string Direction { get; set; }
        public string Bearing { get; set; }
        public string DestinationNaptanId { get; set; }
        public string DestinationName { get; set; }
        public DateTime Timestamp { get; set; }
        public int TimeToStation { get; set; }
        public string CurrentLocation { get; set; }
        public string Towards { get; set; }
        public DateTime ExpectedArrival { get; set; }
        public DateTime TimeToLive { get; set; }
        public string ModeName { get; set; }
    }
}
