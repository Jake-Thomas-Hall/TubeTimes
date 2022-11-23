namespace TubeTimes.Api.Models
{
    public class ValidityPeriod
    {
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public bool IsNow { get; set; }
    }
}