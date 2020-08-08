using FluentValidation;
using NoteManager.Core.Models;

namespace NoteManager.API.Validators
{
    public class NoteValidator : AbstractValidator<Note>
    {
        public NoteValidator()
        {
            RuleFor(x => x.DateInit).NotNull();
            RuleFor(x => x.DateUpdate).NotNull();
        }
    }
}