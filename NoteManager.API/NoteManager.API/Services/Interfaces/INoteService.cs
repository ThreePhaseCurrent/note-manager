using System.Collections.Generic;
using NoteManager.API.Models;
using NoteManager.Core.Models;
using NoteManager.Core.Repositories.Interfaces;

namespace NoteManager.API.Services.Interfaces
{
    public interface INoteService: INoteRepository
    {
        IEnumerable<Note> GetNotes(NoteViewParameters parameters);
    }
}