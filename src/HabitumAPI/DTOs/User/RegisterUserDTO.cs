using System.ComponentModel.DataAnnotations;

namespace HabitumAPI.DTOs.User
{
    public class RegisterUserDTO
    {
        [Required(ErrorMessage = "Campo obrigatório!")]
        public required string Name { get; set; }

        [MaxLength(100)]
        [EmailAddress(ErrorMessage = "Email inválido!")]
        public required string Email { get; set; }

        [Required(ErrorMessage = "Campo obrigatório!")]
        [MaxLength(255)]
        [RegularExpression(
            @"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&/#^()\-_=+{}[\]:;""'<>,.|\\]).{8,}$",
            ErrorMessage = "A senha deve conter no mínimo 8 caracteres, incluindo maiúsculas, minúsculas, número e símbolo."
        )]
        public required string Password { get; set; }
    }
}
