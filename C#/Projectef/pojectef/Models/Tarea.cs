using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pojectef.Models
{
    public class Tarea
    {
        [Key]
        public Guid TareaId { get; set; }
        [ForeignKey("CategoriaId")]
        public Guid CategoriaId { get; set; } // Foreign key to Categoria
        [Required]
        public string Titulo { get; set; }
        public string Descripcion { get; set; }
        public prioridad Prioridad { get; set; } // Enum for priority
        public DateTime FechaCreacion { get; set; }
        public bool Completada { get; set; }
        // Navigation property for related Categoria
        public virtual Categoria Categoria { get; set; }

        [NotMapped]
        public string Resumen { get; set; }

    }

    public enum prioridad { Alta, Media, Baja }

}