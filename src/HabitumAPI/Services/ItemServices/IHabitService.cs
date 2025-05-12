using HabitumAPI.DTOs.Item;
using Microsoft.AspNetCore.Mvc;

namespace HabitumAPI.Services.ItemServices
{
    public interface IHabitService
    {
        Task<HabitDTO> CreateHabit(HabitDTO habit, int userId);
        Task<HabitDTO> GetHabitById(int id);
        Task<List<HabitDTO>> GetUserHabits(string userId);
        Task<HabitDTO?> UpdateHabit(int id, HabitDTO dto);
        Task<bool> DeleteHabit(int id, string userId);
    }
}
