using System;

namespace cake_it.api.domain.Exceptions
{
    public class NotFoundException : Exception { public NotFoundException(string message) : base(message) { } }
}
