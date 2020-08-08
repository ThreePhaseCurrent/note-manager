using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NoteManager.API.Models;
using NoteManager.API.Services.Interfaces;
using NoteManager.Core.Models;
using NoteManager.Core.Repositories;
using NoteManager.Core.Repositories.Interfaces;

namespace NoteManager.API.Services
{
    public class NoteService: FakeNoteRepository, INoteService
    {
        public NoteService(NoteDbContext context) : base(context)
        {
        }
        
        public IEnumerable<Note> GetNotes(NoteViewParameters parameters)
        {
            return GetAll()
                .OrderBy(n => n.Id)
                .Skip((parameters.PageNumber - 1) * parameters.PageSize)
                .Take(parameters.PageSize);
        }
    }
}