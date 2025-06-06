using Microsoft.EntityFrameworkCore;
using pojectef.Models;

namespace pojectef
{
    public class TareaContext : DbContext
    {
        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<Tarea> Tareas { get; set; }

        public TareaContext(DbContextOptions<TareaContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)

        {

            List<Categoria> categoryList = new List<Categoria>();
            categoryList.Add(new Categoria() { CategoriaId = Guid.Parse("c4e0d0e7-5f06-48c7-9246-11fe12f2c657"), Nombre = "Pending activities", peso = 20 });
            categoryList.Add(new Categoria() { CategoriaId = Guid.Parse("c4e0d0e7-5f06-48c7-9246-11fe12f2c602"), Nombre = "Personal activities", peso = 50 });
            modelBuilder.Entity<Categoria>(categoria =>
            {
                categoria.ToTable("Categoria");
                categoria.HasKey(p => p.CategoriaId);
                categoria.Property(p => p.Nombre).IsRequired().HasMaxLength(100);
                categoria.Property(p => p.Descripcion).IsRequired(false);
                categoria.Property(p => p.peso);
                categoria.HasData(categoryList);
            });



            List<Tarea> homeworkList = new List<Tarea>();
            homeworkList.Add(new Tarea()
            {
                TareaId = Guid.Parse("c4e0d0e7-5f06-48c7-9246-11fe12f2c100"),
                CategoriaId = Guid.Parse("c4e0d0e7-5f06-48c7-9246-11fe12f2c657"),
                Prioridad = prioridad.Media,
                Titulo = "Payment of public services",
                FechaCreacion = new DateTime(2024, 6, 5),
                Completada = false
            });
            homeworkList.Add(new Tarea()
            {
                TareaId = Guid.Parse("c4e0d0e7-5f06-48c7-9246-11fe12f2c101"),
                CategoriaId = Guid.Parse("c4e0d0e7-5f06-48c7-9246-11fe12f2c602"),
                Prioridad = prioridad.Baja,
                Titulo = "Finish watching movie",
                FechaCreacion = new DateTime(2024, 6, 5),
                Completada = true
            });

            modelBuilder.Entity<Tarea>(tarea =>
            {
                tarea.ToTable("Tarea");
                tarea.HasKey(p => p.TareaId);
                tarea.Property(p => p.Titulo).IsRequired().HasMaxLength(100);
                tarea.Property(p => p.Descripcion).IsRequired(false);
                tarea.Property(p => p.Prioridad);
                tarea.Property(p => p.FechaCreacion);
                tarea.Property(p => p.Completada);
                
                // Foreign key relationship
                tarea.HasOne(t => t.Categoria)
                      .WithMany(c => c.Tareas)
                      .HasForeignKey(t => t.CategoriaId);

                tarea.HasData(homeworkList);
            });
        }
    }
}
