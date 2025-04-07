using HabitumAPI.DTOs.User;
using HabitumAPI.Models;

namespace HabitumAPI.Utils.Mappers
{
    public static class UserMapper
    {
        public static GetUserDTO ToGetDTO(User user)
        {
            return new GetUserDTO
            {
                ID = user.ID,
                Name = user.Name,
                Email = user.Email,
                Streak = user.Streak,
                LongestStreak = user.LongestStreak,
                WeekScore = user.WeekScore,
                TotalScore = user.TotalScore,
                Rank = user.Rank,
                ProfilePic = user.ProfilePic
            };
        }
    }
}
