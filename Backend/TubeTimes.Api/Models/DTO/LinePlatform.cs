namespace TubeTimes.Api.Models.DTO
{
    public class LinePlatform
    {
        public LinePlatform()
        {
            ArrivalPlatform = new();
        }

        public string LineId { get; set; }
        public string LineName { get; set; }
        public List<ArrivalPlatformResponse> ArrivalPlatform { get; set; }
    }
}