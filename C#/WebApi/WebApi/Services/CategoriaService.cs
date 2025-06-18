using webapi;
using webapi.Models;
namespace webapi.Services;

public class CategoriaService : ICategoriaService
{
    TareasContext _context;
    public CategoriaService(TareasContext bdcontext)
    {
        _context = bdcontext;
    }
    public IEnumerable<Categoria> GetCategorias()
    {
        return _context.Categorias.ToList();
    }

    public async Task SaveCategoria(Categoria categoria)
    {
        if (categoria.CategoriaId == Guid.Empty)
        {
            categoria.CategoriaId = Guid.NewGuid();
            _context.Categorias.Add(categoria);
        }
        else
        {
            _context.Categorias.Update(categoria);
        }
        await _context.SaveChangesAsync();
    }

    public async Task UpdateCategoria(Guid id, Categoria categoriadata)
    {
        var categoriaActual = await _context.Categorias.FindAsync(id);
        if (categoriaActual != null)
        {
            categoriaActual.Nombre = categoriadata.Nombre;
            categoriaActual.Descripcion = categoriadata.Descripcion;
            categoriaActual.Peso = categoriadata.Peso;
            await _context.SaveChangesAsync();
        }
    }

    public async Task DeleteCategoria(Guid id)
    {
        var categoria = await _context.Categorias.FindAsync(id);
        if (categoria != null)
        {
            _context.Categorias.Remove(categoria);
            await _context.SaveChangesAsync();
        }
    }


}

public interface ICategoriaService
{
    IEnumerable<Categoria> GetCategorias();
    Task SaveCategoria(Categoria categoria);
    Task UpdateCategoria(Guid id, Categoria categoriadata);

    Task DeleteCategoria(Guid id);
}