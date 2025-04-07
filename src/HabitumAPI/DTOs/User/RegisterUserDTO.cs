using System.ComponentModel.DataAnnotations;

namespace HabitumAPI.DTOs.User;

public class RegisterUserDTO
{
    [Required(ErrorMessage = "E-mail é obrigatório")]
    [EmailAddress(ErrorMessage = "E-mail inválido")]
    [MaxLength(100, ErrorMessage = "E-mail muito longo!")]
    public required string Email { get; set; }

    [Required(ErrorMessage = "Senha é obrigatória")]
    [MinLength(8, ErrorMessage = "Senha deve ter pelo menos 8 dígitos")]
    public required string Password { get; set; }
}
