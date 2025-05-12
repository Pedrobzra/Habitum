using HabitumAPI.DTOs.User;
using HabitumAPI.Models;
using Microsoft.AspNetCore.Mvc;


namespace HabitumAPI.Services
{
    public interface ITokenService
    {
        string GenerateToken(User user);

        Task<dynamic?> AuthenticationAsync([FromBody] LoginUserDto dto);
    }
}
