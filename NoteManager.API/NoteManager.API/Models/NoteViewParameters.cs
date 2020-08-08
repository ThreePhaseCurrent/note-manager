namespace NoteManager.API.Models
{
    /// <summary>
    /// Parameters for pagination note
    /// </summary>
    public class NoteViewParameters
    {
        public int PageNumber { get; set; } = 1;

        private int maxPageSize = 50;
        private int _pageSize = 10;
        public int PageSize
        {
            get => _pageSize;
            set => _pageSize = (value > maxPageSize) ? maxPageSize : value;
        }
    }
}