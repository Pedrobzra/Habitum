using Microsoft.EntityFrameworkCore;

namespace HabitumAPI.Models;

public class HabitumContext(DbContextOptions<HabitumContext> options) : DbContext(options)
{
    public DbSet<User> Users { get; set; }
    public DbSet<Habit> Habits { get; set; }
    public DbSet<ToDo> ToDos { get; set; }

}
