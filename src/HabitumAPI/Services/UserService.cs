using HabitumAPI.DTOs.User;
using HabitumAPI.Utils.Mappers;
using HabitumAPI.Utils.Security;
using HabitumAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace HabitumAPI.Services
{
    public class UserService : IUserService
    {
        private readonly HabitumContext _context;
        public UserService(HabitumContext context)
        {
            _context = context;
        }

        public async Task<GetUserDTO> CreateUserAsync(RegisterUserDTO dto)
        {
            if (await _context.Users.AnyAsync(u => u.Email == dto.Email))
            {
                throw new InvalidOperationException("E-mail já cadastrado.");
            }

            var user = new User
            {
                Email = dto.Email,
                Password = PasswordHasher.Hash(dto.Password),
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return new GetUserDTO
            {
                ID = user.ID,
                Name = user.Name,
                Email = user.Email
            };
        }
        public async Task<GetUserDTO?> GetUserAsync(int id)
        {
            var user = await _context.Users.FindAsync(id);
            return user != null ? UserMapper.ToGetDTO(user) : null;
        }

        public async Task<List<GetUserDTO>> GetUsersAsync()
        {
            var users = await _context.Users.Select(u => new GetUserDTO { ID = u.ID, Name = u.Name, Email = u.Email }).ToListAsync();
            return users;
        }
    }
}

