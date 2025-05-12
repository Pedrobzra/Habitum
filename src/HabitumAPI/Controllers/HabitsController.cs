using HabitumAPI.DTOs.Item;
using HabitumAPI.Services.ItemServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace HabitumAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class HabitsController(IHabitService habitService) : ControllerBase
    {
        private readonly IHabitService _habitService = habitService;

        [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status401Unauthorized)]
        [Authorize]
        [HttpGet]
        public async Task<IActionResult> DisplayUserHabits()
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (userId == null)
            {
                return Unauthorized();
            }

            var habits = await _habitService.GetUserHabits(userId);

            return Ok(habits);
        }

        [Authorize]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetHabitById(int id)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (userId == null)
            {
                return Unauthorized();
            }
            return Ok(await _habitService.GetHabitById(id));
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> CreateHabit([FromBody] HabitDTO dto)
        {
            var userIdString = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (!int.TryParse(userIdString, out int userId))
            {
                return Unauthorized();
            }

            if (!ModelState.IsValid)
            {
                return ValidationProblem();
            }
            try
            {
                var habitDTO = await _habitService.CreateHabit(dto, userId);
                return CreatedAtAction(nameof(CreateHabit), new { id = habitDTO.ID }, habitDTO);
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

        [Authorize]
        [HttpPut("{id}")]
        public async Task<ActionResult<HabitDTO>> UpdateHabit(int id, [FromBody] HabitDTO dto)
        {
            var updatedHabit = await _habitService.UpdateHabit(id, dto);

            if (updatedHabit == null)
                return NotFound();

            return Ok(updatedHabit);
        }

        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHabit(int id)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (userId == null)
            {
                return Unauthorized();
            }

            var isDeleted = await _habitService.DeleteHabit(id, userId);

            if (isDeleted)
            {
                return NoContent();
            }
            else
            {
                return NotFound();
            }
        }
    }
    
    }

