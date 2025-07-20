using SistemaVenta.IOC;
using Westwind.AspNetCore.LiveReload; // 👉 agregar este using

// Crear el constructor de la aplicación
var builder = WebApplication.CreateBuilder(args);

// Agregar servicios al contenedor
// Aquí además de los controladores y vistas, activamos la recompilación en tiempo de ejecución de las vistas Razor.
builder.Services.AddControllersWithViews()
    .AddRazorRuntimeCompilation(); // 👉 Esto permite ver cambios en las vistas .cshtml sin reiniciar la aplicación.

// 👉 Agregar LiveReload
builder.Services.AddLiveReload();

// Inyectar dependencias personalizadas desde tu clase de configuración
builder.Services.InyectarDependencias(builder.Configuration);

// Construir la aplicación
var app = builder.Build();

// Configuración del pipeline de peticiones HTTP
if (!app.Environment.IsDevelopment())
{
    // Si NO estamos en modo desarrollo, usar página de errores genérica y HSTS
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}
else
{
    // 👉 Si estamos en modo desarrollo, mostrar errores detallados en pantalla.
    app.UseDeveloperExceptionPage();

    // 👉 Activar LiveReload solo en desarrollo
    app.UseLiveReload();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

// Configuración de las rutas de los controladores
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

// Ejecutar la aplicación
app.Run();
