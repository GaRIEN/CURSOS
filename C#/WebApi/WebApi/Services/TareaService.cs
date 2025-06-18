
using webapi;
using webapi.Models;

namespace webapi.Services;

    public class TareaService : ITareaService
    {
        TareasContext _context;
        public TareaService(TareasContext bdcontext)
        {
            _context = bdcontext;
        }
        public IEnumerable<Tarea> GetTareas()
        {
            return _context.Tareas.ToList();
        }

        public async Task SaveTarea(Tarea tarea)
        {
            if (tarea.TareaId == Guid.Empty)
            {
                tarea.TareaId = Guid.NewGuid();
                _context.Tareas.Add(tarea);
            }
            else
            {
                _context.Tareas.Update(tarea);
            }
            await _context.SaveChangesAsync();
        }
        public async Task UpdateTarea(Guid id, Tarea tareadata)
        {
            var tareaActual = await _context.Tareas.FindAsync(id);
            if (tareaActual != null)
            {
                tareaActual.Titulo = tareadata.Titulo;
                tareaActual.Descripcion = tareadata.Descripcion;
                tareaActual.PrioridadTarea = tareadata.PrioridadTarea;
                tareaActual.FechaCreacion = tareadata.FechaCreacion;
                await _context.SaveChangesAsync();
            }
        }
        public async Task DeleteTarea(Guid id)
        {
            var tarea = await _context.Tareas.FindAsync(id);
            if (tarea != null)
            {
                _context.Tareas.Remove(tarea);
                await _context.SaveChangesAsync();
            }
        }
    }


public interface ITareaService
{
    IEnumerable<Tarea> GetTareas();
    Task SaveTarea(Tarea tarea);
    Task UpdateTarea(Guid id, Tarea tareadata);
    Task DeleteTarea(Guid id);
}