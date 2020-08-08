using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NoteManager.Core.Models;

namespace NoteManager.Core.Repositories.Interfaces
{
    public interface INoteRepository
    {
        IEnumerable<Note> GetAll();
        Task<Note> GetById(long id);
        Task AddNote(Note note);
        Task UpdateNote(Note note);
        void RemoveNote(Note note);
        void RemoveNote(long id);
    }
}