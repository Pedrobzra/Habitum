using HabitumAPI.Models;
using System.ComponentModel.DataAnnotations;

namespace HabitumAPI.DTOs.Item
{
    public class HabitDTO
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
        [Required(ErrorMessage = "Selecione uma frequência válida*")]
        public required TypeFrequency Frequency { get; set; }
        public List<string>? WeekDays { get; set; }
        public int? Interval { get; set; }
        public bool AlertHour { get; set; }
        public DateTime? AlertHourTime { get; set; }
        [Required(ErrorMessage = "Campo meta obrigatório*")]
        public required string Goal { get; set; }
    }
}