﻿using System.Runtime.CompilerServices;
using TubeTimes.Api.Interfaces;
using TubeTimes.Api.Models;

namespace TubeTimes.Api.API
{
    public class TfLAPI : ITfLAPI
    {
        private readonly IRequestManager _requestManager;

        public TfLAPI(IRequestManager requestManager)
        {
            _requestManager = requestManager;
        }

        public async Task<List<Line>?> GetLineStatuses() => await _requestManager.GetDataAsync<List<Line>>("Line/Mode/tube,dlr,overground,elizabeth-line,tram/Status", useCache: true, cacheKey: "getLineStatus");
    }
}