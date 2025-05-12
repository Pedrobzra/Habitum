using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HabitumAPI.Models
{
    public abstract class Item
    {
        [Key]
        public int ID { get; set; }
        public int UserID { get; set; }

        [ForeignKey("UserID")]
        public User User { get; set; }

        [MaxLength(25)]
        [Required(ErrorMessage = "Campo nome obrigatório*")]
        public required string Name { get; set; }
        public string? Icon { get; set; }
        public string? Color { get; set; }
        public string? Description { get; set; }
        public bool Notifications { get; set; }
    }

    public class Habit : Item
    {
        [Required(ErrorMessage = "Selecione uma frequência válida*")]
        public required TypeFrequency Frequency { get; set; }
        public List<string>? WeekDays { get; set; }
        public int? Interval { get; set; }
        public bool AlertHour { get; set; }
        public DateTime? AlertHourTime { get; set; }

        [Required(ErrorMessage = "Campo meta obrigatório*")]
        public required string Goal { get; set; }
    }

    public class ToDo : Item
    {
        [Required(ErrorMessage = "Selecione uma data de início*")]
        public required DateTime StartDate { get; set; }

        [Required(ErrorMessage = "Selecione uma data de término*")]
        public required DateTime EndDate { get; set; }
    }

    public enum TypeFrequency
    {
        Diário,
        Semanal,
        Intervalo
    }
}

