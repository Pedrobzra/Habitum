using HabitumAPI.DTOs.Item;

namespace HabitumAPI.Services.ItemServices
{
    public interface IToDoService
    {
        Task<ToDoDTO> CreateToDo(ToDoDTO toDo, string userId);
        Task<List<ToDoDTO>> GetUserTodos(string userId);
    }
}
