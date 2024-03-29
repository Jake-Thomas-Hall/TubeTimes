﻿using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Net.Http.Headers;
using TubeTimes.Api.Interfaces;

namespace TubeTimes.Api.API
{
    // Used as a managed HTTP request client, that has the option to cache requests for a specified number of minutes
    public class RequestManager : IRequestManager
    {
        private readonly IConfiguration _configuration;
        private readonly IMemoryCache _memoryCache;
        private readonly HttpClient _httpClient;
        private readonly ILogger<RequestManager> _logger;

        public RequestManager(HttpClient httpClient, IConfiguration configuration, IMemoryCache memoryCache, ILogger<RequestManager> logger)
        {
            _configuration = configuration;
            _memoryCache = memoryCache;
            _httpClient = httpClient;
            _logger = logger;

            _httpClient.BaseAddress = new Uri("https://api.tfl.gov.uk/");
        }

        public async Task<T> GetDataAsync<T>(string url, Dictionary<string, string>? queryParameters = null, bool useCache = false, string cacheKey = "", int cacheTimeoutSeconds = 60)
        {
            // If no parameters were passed, ensure there is an empty dictionary to prevent later issues...
            queryParameters = queryParameters ?? new ();

            // If using caching for this request, try to get the cached value for this request by key, and return the value.
            if (useCache)
            {  
                if (_memoryCache.TryGetValue(cacheKey, out T cachedValue))
                {
                    _logger.LogInformation($"Cached item with key {cacheKey} was fetched, deletion delay: {cacheTimeoutSeconds}s");
                    return cachedValue;
                }
            }

            queryParameters.Add("app_key", _configuration.GetValue<string>("TfLAppKey"));

            // Make the request and convert json response to the generic type. Only reaches this point if not using caching or if cached value wasn't found.
            var result = await _httpClient.GetFromJsonAsync<T>(QueryHelpers.AddQueryString(url, queryParameters!)) ?? throw new NullReferenceException($"Query of URL {url} returned a null response");

            // In the case of using caching, need to set value into cache after query is complete, as the cached item has either expired or not been stored before 
            if (useCache)
            {
                _memoryCache.Set(cacheKey, result, TimeSpan.FromSeconds(cacheTimeoutSeconds));
            }

            return result;
        }
    }
}
