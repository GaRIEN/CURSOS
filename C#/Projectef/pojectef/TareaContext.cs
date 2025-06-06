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




    }
}
