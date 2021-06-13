using System;
using cake_it.api.domain;
using FluentValidation;

namespace cake_it.api.Validation
{
    public class CakeValidator : AbstractValidator<Cake>
    {
        public CakeValidator()
        {
            RuleFor(cake => cake.Name).NotEmpty();
            RuleFor(cake => cake.Comment).NotEmpty().Length(5, 200);
            RuleFor(cake => cake.ImageUrl).NotEmpty().Must(uri => Uri.TryCreate(uri, UriKind.Absolute, out _)).WithMessage("Image URL must be a valid URL.");
            RuleFor(cake => cake.YumFactor).InclusiveBetween(1, 5);
        }
    }
}
