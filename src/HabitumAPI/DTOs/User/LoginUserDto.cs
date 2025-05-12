namespace HabitumAPI.DTOs.User
{
    public class LoginUserDto
    {
        public int ID { get; set; }
        public required string Email { get; set; }

        public required string Password { get; set; }    
    }
}
