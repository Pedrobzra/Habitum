using HabitumAPI.DTOs.Item;
using HabitumAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace HabitumAPI.Services.ItemServices
{
    public class ToDoService : IToDoService
    {
        private readonly HabitumContext _context;
        public ToDoService(HabitumContext context)
        {
            _context = context;
        }

        public async Task<ToDoDTO> CreateToDo(ToDoDTO toDo, string userId)
        { 

            var ToDo = new ToDo
           {
                UserID = int.Parse(userId),
               Name = toDo.Name,
               Icon = toDo.Icon,
               Color = toDo.Color,
               Description = toDo.Description,
               Notifications = toDo.Notifications,
               StartDate = toDo.StartDate,
               EndDate = toDo.EndDate
           };

            _context.ToDos.Add(ToDo);
            await _context.SaveChangesAsync();

            return new ToDoDTO
            {
                Name = ToDo.Name,
                Icon = ToDo.Icon,
                Color = ToDo.Color,
                Description = ToDo.Description,
                Notifications = ToDo.Notifications,
                StartDate = ToDo.StartDate,
                EndDate = ToDo.EndDate
            };
        }

        public async Task<List<ToDoDTO>> GetUserTodos(string userId)
        {
            var todos = await _context.ToDos.Where(td => td.UserID.ToString() == userId).ToListAsync();
            if (todos == null)
            {
                return [];
            }
            var todosDtos = todos.Select(h => new ToDoDTO
            {
                ID = h.ID,
                Name = h.Name,
                Icon = h.Icon,
                Color = h.Color,
                Description = h.Description,
                Notifications = h.Notifications,
                StartDate = h.StartDate,
                EndDate = h.EndDate

            }).ToList();

            return todosDtos;
        }
    }
}
