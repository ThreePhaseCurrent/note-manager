using Microsoft.EntityFrameworkCore;

namespace NoteManager.Core.Models
{
    public class NoteDbContext : DbContext
    {
        public NoteDbContext(DbContextOptions<NoteDbContext> options) : base(options)
        {
            
        }

        public DbSet<Note> Note { get; set; }
    }
}