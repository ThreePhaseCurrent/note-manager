using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NoteManager.API.Models;
using NoteManager.API.Services.Interfaces;
using NoteManager.API.Validators;
using NoteManager.Core.Models;
using NoteManager.Core.Repositories.Interfaces;

namespace NoteManager.API.Controllers
{
    [ApiController]
    [Route("")]
    public class NoteController : Controller
    {
        private readonly INoteService _noteService;
        private readonly ILogger<NoteController> _logger;
            
        public NoteController(INoteService noteService, ILogger<NoteController> logger)
        {
            _noteService = noteService;
            _logger = logger;
        }

        [Route("notes")]
        [HttpGet]
        public IActionResult GetNotes()
        {
            var notes = _noteService.GetAll();
            _logger.Log(LogLevel.Information, "Get all notes");
            
            return Ok(notes);
        }
        
        [Route("notes/{id}")]
        [HttpGet]
        public async Task<IActionResult> GetNote(long id)
        {
            var notes = await _noteService.GetById(id);
            _logger.Log(LogLevel.Information, $"Get {id} note");
            
            return Ok(notes);
        }

        [Route("notes")]
        [HttpPost]
        public IActionResult CreateNote([FromBody]Note note)
        {
            var validResult = new NoteValidator().Validate(note);

            if (!validResult.IsValid)
            {
                _logger.Log(LogLevel.Information, "Note is not valid!");

                foreach (var error in validResult.Errors)
                {
                    ModelState.AddModelError(error.ErrorCode, error.ErrorMessage);
                }

                return BadRequest(ModelState);
            }
            
            _noteService.AddNote(note);
            _logger.Log(LogLevel.Information, "Saved new note");

            return Ok(note);
        }

        [Route("notes/{id}")]
        [HttpPut]
        public IActionResult UpdateNode(long id, [FromBody] Note note)
        {
            var validResult = new NoteValidator().Validate(note);

            if (!validResult.IsValid)
            {
                _logger.Log(LogLevel.Information, "Note is not valid!");

                foreach (var error in validResult.Errors)
                {
                    ModelState.AddModelError(error.ErrorCode, error.ErrorMessage);
                }

                return BadRequest(ModelState);
            }
            
            _noteService.UpdateNote(note);
            _logger.Log(LogLevel.Information, $"Updated {note.Id} note");
            
            return Ok(note);
        }

        [Route("notes/{id}")]
        [HttpDelete]
        public IActionResult DeleteNode(long id)
        {
            _noteService.RemoveNote(id);
            _logger.Log(LogLevel.Information, $"Deleted one note");
            
            return Ok(id);
        }
        
    }
}