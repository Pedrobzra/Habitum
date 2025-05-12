using System.ComponentModel.DataAnnotations;

namespace HabitumAPI.DTOs.Item
{
    public class ToDoDTO
    {
        [Key]
        public int ID { get; set; }
        [MaxLength(25)]
        [Required(ErrorMessage = "Campo nome obrigatório*")]
        public required string Name { get; set; }
        public string? Icon { get; set; }
        public string? Color { get; set; }
        public string? Description { get; set; }
        public bool Notifications { get; set; }

        [Required(ErrorMessage = "Selecione uma data de início*")]
        public required DateTime StartDate { get; set; }

        [Required(ErrorMessage = "Selecione uma data de término*")]
        public required DateTime EndDate { get; set; }
    }
}
