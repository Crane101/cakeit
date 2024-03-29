﻿//using System;
//using System.Diagnostics;
//using System.Linq;
//using System.Threading.Tasks;
//using Microsoft.AspNetCore.Http;
//using Serilog;
//using Serilog.Events;

//namespace cake_it.api.Middleware
//{
//    public class SerilogMiddleware
//    {
//        private const string MESSAGE_TEMPLATE = "{IPAddress} {protocol} {RequestMethod} {RequestPath} responded {StatusCode} in {Elapsed:0.0000} ms";

//        private readonly RequestDelegate _next;
//        private readonly ILogger _log;

//        public SerilogMiddleware(RequestDelegate next, ILogger log)
//        {
//            _next = next ?? throw new ArgumentNullException(nameof(next));
//            _log = log;
//        }

//        public async Task Invoke(HttpContext httpContext)
//        {
//            if (httpContext == null) throw new ArgumentNullException(nameof(httpContext));

//            var sw = Stopwatch.StartNew();
//            try
//            {
//                await _next(httpContext);
//                sw.Stop();

//                var statusCode = httpContext.Response?.StatusCode;
//                var level = statusCode > 499 ? LogEventLevel.Error : LogEventLevel.Information;

//                var log = level == LogEventLevel.Error ? LogForErrorContext(httpContext) : _log;
//                log.Write(level, MESSAGE_TEMPLATE, httpContext.Connection.RemoteIpAddress, httpContext.Request.IsHttps ? "HTTPS" : "HTTP", httpContext.Request.Method, httpContext.Request.Path, statusCode, sw.Elapsed.TotalMilliseconds);
//            }
//            // Never caught, because `LogException()` returns false.
//            catch (Exception ex) when (LogException(httpContext, sw, ex)) { }
//        }

//        private static bool LogException(HttpContext httpContext, Stopwatch sw, Exception ex)
//        {
//            sw.Stop();

//            LogForErrorContext(httpContext)
//                .Error(ex, MESSAGE_TEMPLATE,
//                    httpContext.Connection.RemoteIpAddress,
//                    httpContext.Request.IsHttps ? "HTTPS" : "HTTP",
//                    httpContext.Request.Method,
//                    httpContext.Request.Path, 500, sw.Elapsed.TotalMilliseconds);

//            return false;
//        }

//        private static ILogger LogForErrorContext(HttpContext httpContext)
//        {
//            var request = httpContext.Request;

//            var result = Log
//                .ForContext("RequestHeaders", request.Headers.ToDictionary(h => h.Key, h => h.Value.ToString()), destructureObjects: true)
//                .ForContext("RequestHost", request.Host)
//                .ForContext("RequestProtocol", request.Protocol);

//            if (request.HasFormContentType)
//                result = result.ForContext("RequestForm", request.Form.ToDictionary(v => v.Key, v => v.Value.ToString()));

//            return result;
//        }
//    }
//}