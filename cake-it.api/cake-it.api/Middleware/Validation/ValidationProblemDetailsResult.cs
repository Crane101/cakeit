using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using cake_it.api.Extensions;
using cake_it.api.Middleware.ErrorHandling;
using Microsoft.AspNetCore.Mvc;
using Serilog;

namespace cake_it.api.Middleware.Validation
{
    public class ValidationProblemDetailsResult : IActionResult
    {
        private readonly ILogger _logger;

        public ValidationProblemDetailsResult(ILogger logger)
        {
            _logger = logger;
        }

        public async Task ExecuteResultAsync(ActionContext context)
        {
            var modelStateEntries = context.ModelState.Where(e => e.Value.Errors.Count > 0).ToArray();
            var errors = new List<ValidationError>();

            var details = "See ValidationErrors for details";

            if (modelStateEntries.Any())
            {
                if (modelStateEntries.Length == 1 && modelStateEntries[0].Value.Errors.Count == 1 && modelStateEntries[0].Key == string.Empty)
                {
                    details = modelStateEntries[0].Value.Errors[0].ErrorMessage;
                }
                else
                {

                    foreach (var modelStateEntry in modelStateEntries)
                    {

                        var error = new ValidationError
                        {
                            Name = modelStateEntry.Key,
                            // Only take the first message per field to avoid reporting "double validation", from both MVC and Fluent
                            Description = modelStateEntry.Value.Errors.First().ErrorMessage
                        };

                        errors.Add(error);
                    }
                }

            }
            
            var problemDetails = ErrorResponse.Create();
            problemDetails.Status = 400;
            problemDetails.Title = "Request Validation Error";
            problemDetails.Detail = details;
            problemDetails.ValidationErrors = errors;

            context.HttpContext.Response.StatusCode = 400;
            await context.HttpContext.Response.WriteJson(problemDetails);

            _logger.Error("{@ProblemDetails}", problemDetails);
        }
    }
}
