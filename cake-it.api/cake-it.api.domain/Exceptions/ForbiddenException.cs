using System;

namespace cake_it.api.domain.Exceptions
{
    public class BadRequestException : Exception { public BadRequestException(string message) : base(message) { } }
}
