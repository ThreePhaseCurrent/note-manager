using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NoteManager.Core.Models;
using NoteManager.Core.Repositories.Interfaces;

namespace NoteManager.Core.Repositories
{
    public class FakeNoteRepository : INoteRepository
    {
        private NoteDbContext _context;
        
        public FakeNoteRepository(NoteDbContext context)
        {
            _context = context;
        }
        
        public IEnumerable<Note> GetAll()
        {
            return _context.Note;
        }

        public async Task<Note> GetById(long id)
        {
            return await _context.Note.FirstOrDefaultAsync(n => n.Id == id);
        }

        public async Task AddNote(Note note)
        {
            await _context.AddAsync(note);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateNote(Note note)
        {
            _context.Note.Update(note);
            await _context.SaveChangesAsync();
        }

        public void RemoveNote(Note note)
        {
            _context.Note.Remove(note);
            _context.SaveChanges();
        }

        public void RemoveNote(long id)
        {
            var node = _context.Note.FirstOrDefault(n => n.Id == id);

            if (node != default)
            {
                _context.Note.Remove(node);
                _context.SaveChanges();
            }
        }
    }
}