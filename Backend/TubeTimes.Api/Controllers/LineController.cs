using Microsoft.AspNetCore.Mvc;
using TubeTimes.Api.Interfaces;
using TubeTimes.Api.Models.DTO;
using TubeTimes.Api.Models.TfLTypes;

namespace TubeTimes.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LineController : ControllerBase
    {
        private readonly ITfLAPI _tflAPI;
        private readonly ILogger<LineController> _logger;

        public LineController(ITfLAPI tflAPI, ILogger<LineController> logger)
        {
            _tflAPI = tflAPI;
            _logger = logger;
        }

        [HttpGet]
        public async Task<List<Line>> Get(string? search)
        {
            return await _tflAPI.GetLines(search);
        }

        [HttpGet("Status")]
        public async Task<List<Line>> Get()
        {
            return await _tflAPI.GetLineStatuses();
        }

        [HttpGet("{line}/Route/Sequence/{direction}")]
        public async Task<LineRouteResponse> Get(string line, string direction)
        {
            return await _tflAPI.GetLineRoute(line, direction);
        }
    }
}
