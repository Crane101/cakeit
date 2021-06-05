using System;

namespace cake_it.api.domain.Exceptions
{
    public class AuthException : Exception
    {
        public object Content { get; set; }

        public AuthException(string message) : base(message) { }

        public AuthException(string message, object content = null) : base(message)
        {
            Content = content;
        }
    }
}
