using System;

namespace cake_it.api.domain.Exceptions
{
    public class ForbiddenException : Exception { public ForbiddenException(string message) : base(message) { } }
}
