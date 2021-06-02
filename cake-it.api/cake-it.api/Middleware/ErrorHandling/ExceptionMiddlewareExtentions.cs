using System;
using System.Diagnostics;
using System.Net;
using cake_it.api.domain.Exceptions;
using cake_it.api.Extensions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Serilog;

namespace cake_it.api.Middleware.ErrorHandling
{
    public static class ExceptionMiddlewareExtensions
    {
        public static IApplicationBuilder ConfigureExceptionHandler(this IApplicationBuilder app, ILogger logger)
        {
            app.UseExceptionHandler(appError =>
            {

                appError.Run(async context =>
                {
                    var errorFeature = context.Features.Get<IExceptionHandlerFeature>();
                    var exception = errorFeature.Error;
                    var errorDetail = exception.Demystify().ToString();
                    ErrorResponse problemDetails = ErrorResponse.Create();


                    if (exception is BadRequestException badRequestException)
                    {
                        problemDetails.Title = "Invalid request";
                        problemDetails.Status = (int)HttpStatusCode.BadRequest;
                        problemDetails.Detail = badRequestException.Message;
                    }

                    else if (exception is UnauthorizedAccessException unauthorizedAccessException)
                    {
                        problemDetails.Title = "Unauthorised request";
                        problemDetails.Status = (int)HttpStatusCode.Unauthorized;
                        problemDetails.Detail = unauthorizedAccessException.Message;
                    }

                    else if (exception is ForbiddenException forbiddenException)
                    {
                        problemDetails.Title = "Forbidden";
                        problemDetails.Status = (int)HttpStatusCode.Forbidden;
                        problemDetails.Detail = forbiddenException.Message;
                    }

                    else if (exception is NotFoundException notFoundException)
                    {
                        problemDetails.Title = "Not Found";
                        problemDetails.Status = (int)HttpStatusCode.NotFound;
                        problemDetails.Detail = notFoundException.Message;
                    }

                    else if (exception is UnsupportedContentTypeException unsupportedContentException)
                    {
                        problemDetails.Title = "Unsupported content type.";
                        problemDetails.Status = (int)HttpStatusCode.UnsupportedMediaType;
                        problemDetails.Detail = unsupportedContentException.Message;
                    }

                    else
                    {
                        problemDetails.Title = "An unexpected error occurred";
                        problemDetails.Status = 500;
                        problemDetails.Detail = "An unexpected error occurred. Please try again or contact support.";
                    }

                    logger.Error("{ErrorDetail} {@ProblemDetails}", errorDetail, problemDetails);
                    context.Response.StatusCode = problemDetails.Status.Value;
                    await context.Response.WriteJson(problemDetails, "application/problem+json");
                });
            });

            return app;
        }
    }
}
