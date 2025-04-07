namespace HabitumAPI.DTOs.User;

public class GetUserDTO
{
    public int ID { get; set; }
    public string? Name { get; set; }
    public required string Email { get; set; }
    public int Streak { get; set; }
    public int LongestStreak { get; set; }
    public int WeekScore { get; set; }
    public int TotalScore { get; set; }
    public int Rank { get; set; }
    public string? ProfilePic { get; set; }
}
