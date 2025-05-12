using HabitumAPI.DTOs.Item;
using HabitumAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace HabitumAPI.Services.ItemServices
{
    public class HabitService : IHabitService
    {
        private readonly HabitumContext _context;
        public HabitService(HabitumContext context)
        {
            _context = context;
        }

        public async Task<HabitDTO> CreateHabit(HabitDTO habit, int userId)
        {
            var Habit = new Habit
            {
                UserID = userId,
                Name = habit.Name,
                Icon = habit.Icon,
                Color = habit.Color,
                Description = habit.Description,
                Notifications = habit.Notifications,
                Frequency = habit.Frequency,
                WeekDays = habit.WeekDays,
                Interval = habit.Interval,
                AlertHour = habit.AlertHour,
                AlertHourTime = habit.AlertHourTime,
                Goal = habit.Goal
            };

            await _context.Habits.AddAsync(Habit);
            await _context.SaveChangesAsync();

            return new HabitDTO
            {
                Name = Habit.Name,
                Icon = Habit.Icon,
                Color = habit.Color,
                Description = Habit.Description,
                Notifications = Habit.Notifications,
                Frequency = Habit.Frequency,
                WeekDays = Habit.WeekDays,
                Interval = Habit.Interval,
                AlertHour = Habit.AlertHour,
                AlertHourTime = Habit.AlertHourTime,
                Goal = Habit.Goal
            };
        }

        public async Task<HabitDTO> GetHabitById(int id)
        {
            var habit = await _context.Habits.FindAsync(id);
            return new HabitDTO
            {
                Name = habit.Name,
                Icon = habit.Icon,
                Color = habit.Color,
                Description = habit.Description,
                Notifications = habit.Notifications,
                Frequency = habit.Frequency,
                WeekDays = habit.WeekDays,
                Interval = habit.Interval,
                AlertHour = habit.AlertHour,
                AlertHourTime = habit.AlertHourTime,
                Goal = habit.Goal
            };
        }

        public async Task<List<HabitDTO>> GetUserHabits(string userId)
        {
            var habits = await _context.Habits.Where(h => h.UserID.ToString() == userId).ToListAsync();
            if (habits == null)
            {
                return [];
            }
            var habitDtos = habits.Select(h => new HabitDTO
            {
                ID = h.ID,
                Name = h.Name,
                Frequency = h.Frequency,
                Icon = h.Icon,
                Color = h.Color,
                Description = h.Description,
                Notifications = h.Notifications,
                WeekDays = h.WeekDays,
                Interval = h.Interval,
                AlertHour = h.AlertHour,
                AlertHourTime = h.AlertHourTime,
                Goal = h.Goal
            }).ToList();

            return habitDtos;
        }

        public async Task<HabitDTO?> UpdateHabit(int id, HabitDTO dto)
        {

            var habit = await _context.Habits.FindAsync(id);

            if (habit == null)
            {
                return null; // Habit não encontrado
            }

            habit.Name = dto.Name;
            habit.Icon = dto.Icon;
            habit.Color = dto.Color;
            habit.Description = dto.Description;
            habit.Notifications = dto.Notifications;
            habit.Frequency = dto.Frequency;
            habit.WeekDays = dto.WeekDays;
            habit.Interval = dto.Interval;
            habit.AlertHour = dto.AlertHour;
            habit.AlertHourTime = dto.AlertHourTime;
            habit.Goal = dto.Goal;



            try
            {
                await _context.SaveChangesAsync();
                return new HabitDTO
                {
                    ID = habit.ID,
                    Name = habit.Name,
                    Icon = habit.Icon,
                    Color = habit.Color,
                    Description = habit.Description,
                    Notifications = habit.Notifications,
                    Frequency = habit.Frequency,
                    WeekDays = habit.WeekDays,
                    Interval = habit.Interval,
                    AlertHour = habit.AlertHour,
                    AlertHourTime = habit.AlertHourTime,
                    Goal = habit.Goal
                };
            }
            catch (Exception)
            {
                return null;
            }
        }

        public async Task<bool> DeleteHabit(int id, string userId)
        {
            var habit = await _context.Habits.FindAsync(id);

            if (habit == null || habit.UserID.ToString() != userId)
            {
                return false;
            }

            _context.Habits.Remove(habit);
            var changes = await _context.SaveChangesAsync();

            return changes > 0;
        }
    }
}
