using Microsoft.EntityFrameworkCore;

namespace HabitumAPI.Models;

public class HabitumContext : DbContext
{
    public HabitumContext(DbContextOptions<HabitumContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
}
