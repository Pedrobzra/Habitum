using System.ComponentModel.DataAnnotations;

namespace HabitumAPI.Models
{
    public class User
    {
        [Key]
        public int ID { get; set; }

        public string? Name { get; set; }

        [MaxLength(100)]
        [Required]
        public required string Email { get; set; }

        [Required]
        [MaxLength(255)]
        public required string Password { get; set; }

        public int Streak { get; set; }
        public int LongestStreak { get; set; }
        public int WeekScore { get; set; }
        public int TotalScore { get; set; }
        public int Rank { get; set; }
        public string? ProfilePic { get; set; }

        public User()
        {
            Name = "Anônimo";
            Streak = 0;
            LongestStreak = 0;
            WeekScore = 0;
            TotalScore = 0;
            Rank = 0;
            ProfilePic = "/caminho/da/foto.png";
        }
    }
}