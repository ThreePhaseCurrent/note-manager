using System;

namespace NoteManager.Core.Models
{
    public class Note
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public DateTime DateInit { get; set; }
        public DateTime DateUpdate { get; set; }
        public bool IsActual { get; set; } = true;
    }
}