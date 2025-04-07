using HabitumAPI.DTOs.User;

namespace HabitumAPI.Services
{
    public interface IUserService
    {
        Task<GetUserDTO> CreateUserAsync(RegisterUserDTO dto);
        Task<List<GetUserDTO>> GetUsersAsync();
        Task<GetUserDTO?> GetUserAsync(int id);
    }
}
