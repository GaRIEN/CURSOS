namespace pojectef.Models
{
    public class Tarea
    {
        public Guid TareaId { get; set; }
        public Guid CategoriaId { get; set; } // Foreign key to Categoria
        public string Titulo { get; set; }
        public string Descripcion { get; set; }
        public prioridad Prioridad { get; set; } // Enum for priority
        public DateTime FechaCreacion { get; set; }
        public bool Completada { get; set; }
        // Navigation property for related Categoria
        public virtual Categoria Categoria { get; set; }
    }

    public enum prioridad { Alta, Media, Baja }

}