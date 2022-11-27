namespace TubeTimes.Api.Interfaces
{
    public interface IRequestManager
    {
        /// <summary>
        /// Http Client wrapper that can be used to make (optionally memory cached) requests to the TfL API - uses the api key from the app settings
        /// </summary>
        /// <typeparam name="T">The response type to parse the JSON response to</typeparam>
        /// <param name="url">Provide the relative URL for the request against the TfL API</param>
        /// <param name="queryParameters">Dictionary of additional request parameters</param>
        /// <param name="useCache">If true, request is cached for specified number of seconds in <paramref name="cacheTimeoutSeconds"/></param>
        /// <param name="cacheKey">The key to use for the cache of this request, make sure to use different keys for different request types</param>
        /// <param name="cacheTimeoutSeconds">Number of seconds until cached data is marked as expired.</param>
        /// <returns><typeparamref name="T"/></returns>
        Task<T> GetDataAsync<T>(string url, Dictionary<string, string>? queryParameters = null, bool useCache = false, string cacheKey = "", int cacheTimeoutSeconds = 60);
    }
}
