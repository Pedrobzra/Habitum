using HabitumAPI.DTOs.Item;
using HabitumAPI.Services.ItemServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace HabitumAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ToDosController(IToDoService toDoService) : ControllerBase
    {
        private readonly IToDoService _toDoService = toDoService;

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> CreateToDo([FromBody] ToDoDTO dto)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (userId == null)
            {
                return Unauthorized();
            }


            if (!ModelState.IsValid)
            {
                return ValidationProblem();
            }
            try
            {
                var toDoDTO = await _toDoService.CreateToDo(dto, userId);
                return CreatedAtAction(nameof(CreateToDo), new { id = toDoDTO.ID }, toDoDTO);
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500, "Erro interno no servidor.");
            }
        }

        [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status401Unauthorized)]
        [Authorize]
        [HttpGet]
        public async Task<IActionResult> DisplayUserTodos()
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (userId == null)
            {
                return Unauthorized();
            }

            var habits = await _toDoService.GetUserTodos(userId);

            return Ok(habits);
        }
    }
}
