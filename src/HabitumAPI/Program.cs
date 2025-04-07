using HabitumAPI.Models;
using HabitumAPI.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// ===== Services =====
builder.Services.AddControllers();
builder.Services.AddScoped<IUserService, UserService>();

builder.Services.AddDbContext<HabitumContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("HabitumContext"),
        new MySqlServerVersion(new Version(8, 0, 41))
    )
);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
        policy.WithOrigins("http://localhost:8081")
              .AllowAnyMethod()
              .AllowAnyHeader());
});

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "HabitumAPI", Version = "v1" });
});

var app = builder.Build();

// ===== Middlewares =====
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "HabitumAPI v1");
    });
}

app.UseCors("AllowFrontend");
app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers(); // Mapeia os endpoints dos controllers

app.Run();
