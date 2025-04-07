using HabitumAPI.DTOs.User;
using HabitumAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace HabitumAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UsersController(IUserService userService) : ControllerBase
    {
        private readonly IUserService _userService = userService;

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _userService.GetUsersAsync();
            if (users is null)
            {
                return NotFound("Usuário não encontrado");
            }
            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _userService.GetUserAsync(id);
            if(user is null)
            {
                return NotFound("Usuário não encontrado");
            }
            return Ok(user);
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] RegisterUserDTO dto)
        {
            if(!ModelState.IsValid)
            {
                return ValidationProblem();
            }

            try
            {
                var userDTO = await _userService.CreateUserAsync(dto);
                return CreatedAtAction(nameof(GetUser), new { id = userDTO.ID }, userDTO);
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception) // When needed, change to catach (Exception ex) to log the error message
            {
                return StatusCode(500, "Erro interno no servidor.");
            }
        }
    }
}
