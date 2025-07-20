using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SistemaVenta.DAL.DBContext;
using Microsoft.EntityFrameworkCore;


namespace SistemaVenta.IOC
{
    public static class Dependencia
    {
        // para inyectar dependencias
        public static void InyectarDependencias(this IServiceCollection services, IConfiguration configuration)
        {
            // Configuración de la cadena de conexión a la base de datos
            services.AddDbContext<DBVENTAContext>(options =>
                options.UseSqlServer(configuration.GetConnectionString("CadenaSQL"))
            );
        }
    }
}
