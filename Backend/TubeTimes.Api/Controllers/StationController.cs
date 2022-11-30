using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TubeTimes.Api.Interfaces;
using TubeTimes.Api.Models.DTO;
using TubeTimes.Api.Models.TfLTypes;

namespace TubeTimes.Api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class StationController : ControllerBase
    {
        private readonly ITfLAPI _tflAPI;
        private readonly ILogger<LineController> _logger;

        public StationController(ITfLAPI tflAPI, ILogger<LineController> logger)
        {
            _tflAPI = tflAPI;
            _logger = logger;
        }

        [HttpGet("{stationId}")]
        public async Task<StationDetailResponse> Get(string stationId)
        {
            return await _tflAPI.GetStationById(stationId);
        }

        [HttpGet("Search/{query}")]
        public async Task<StationSearch> Search(string query)
        {
            return await _tflAPI.GetStationByName(query);
        }
    }
}
