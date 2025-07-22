using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SistemaVenta.DAL.DBContext;
using SistemaVenta.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace SistemaVenta.DAL.Implementacion
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class

    {
        private readonly DBVENTAContext __dbcontext;
        public GenericRepository(DBVENTAContext dbcontext)
        {
            __dbcontext = dbcontext;
        }

        public async Task<IQueryable<TEntity>> Consultar(Expression<Func<TEntity, bool>> filtro = null)
        {
            IQueryable<TEntity> queryEntidad = filtro == null ? __dbcontext.Set<TEntity>() : __dbcontext.Set<TEntity>().Where(filtro);
            return queryEntidad;
        }

        public async Task<TEntity> Crear(TEntity entidad)
        {
            try
            {
                __dbcontext.Set<TEntity>().Add(entidad);
                await __dbcontext.SaveChangesAsync();
                return entidad;

            }
            catch
            {
                throw;
            }
        }

        public async Task<bool> Editar(TEntity entidad)
        {
            try
            {
                __dbcontext.Update(entidad);
                await __dbcontext.SaveChangesAsync();
                return true;

            }
            catch
            {
                throw;
            }
        }

        public async Task<bool> Eliminar(TEntity entidad)
        {
            try
            {
                __dbcontext.Remove(entidad);
                await __dbcontext.SaveChangesAsync();
                return true;

            }
            catch
            {
                throw;
            }
        }

        public async Task<TEntity> Obtener(Expression<Func<TEntity, bool>> filtro)
        {
            try
            {
                TEntity entidad = await __dbcontext.Set<TEntity>().FirstOrDefaultAsync(filtro);
                return entidad;

            }
            catch
            {
                throw;
            }
        }
    }
}
