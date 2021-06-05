using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace cake_it.api.Middleware.ErrorHandling
{

    public class ErrorResponse : ProblemDetails
    {
        public ErrorResponse() { }

        private ErrorResponse(string id)
        {
            Id = id;
        }

        public string Id { get; set; }

        public ICollection<ValidationError> ValidationErrors { get; set; }

        public static ErrorResponse Create()
        {
            return new ErrorResponse(new Random().Next(11111111, 99999999).ToString());
        }
    }

}
