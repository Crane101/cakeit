using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.WebUtilities;
using Newtonsoft.Json;

namespace cake_it.api.Extensions
{
    public static class HttpExtensions
    {
        public static async Task WriteJson<T>(this HttpResponse response, T obj, string contentType = null)
        {
            response.ContentType = contentType ?? "application/json";
            await using var writer = new HttpResponseStreamWriter(response.Body, Encoding.UTF8);
            using var jsonWriter = new JsonTextWriter(writer) { CloseOutput = false, AutoCompleteOnClose = false };

            Serializer.Serialize(jsonWriter, obj);
        }

        private static readonly JsonSerializer Serializer = new JsonSerializer
        {
            NullValueHandling = NullValueHandling.Ignore
        };
    }
}