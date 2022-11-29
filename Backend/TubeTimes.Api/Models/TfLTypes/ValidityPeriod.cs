namespace TubeTimes.Api.Models.TfLTypes
{
    public class ValidityPeriod
    {
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public bool IsNow { get; set; }
    }
}