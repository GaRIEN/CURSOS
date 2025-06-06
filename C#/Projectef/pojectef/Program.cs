using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pojectef;
using pojectef.Models;

var builder = WebApplication.CreateBuilder(args);

// Logging detallado para debug
builder.Logging.ClearProviders();
builder.Logging.AddConsole();

// Configurar conexión desde appsettings.json
builder.Services.AddSqlServer<TareaContext>(builder.Configuration.GetConnectionString("TareasDb"));

// Agregar servicios
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

// Crear base de datos si no existe
using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<TareaContext>();

    try
    {
        dbContext.Database.EnsureCreated();
        Console.WriteLine("✅ Base de datos verificada o creada correctamente.");
    }
    catch (Exception ex)
    {
        Console.WriteLine($"❌ Error al crear/verificar la base de datos: {ex.Message}");
    }
}

// Health check para probar conexión
app.MapGet("/dbconexion", async ([FromServices] TareaContext dbContext) =>
{
    var canConnect = await dbContext.Database.CanConnectAsync();
    return canConnect
        ? Results.Ok("Base de datos conectada correctamente.")
        : Results.Problem("No se pudo conectar a la base de datos.");
});

app.MapGet("/api/tareas", async ([FromServices] TareaContext dbContext) =>
{
    var tareas = await dbContext.Tareas
        .Include(p => p.Categoria)
        .Select(t => new
        {
            t.TareaId,
            t.Titulo,
            t.Descripcion,
            t.Prioridad,
            t.FechaCreacion,
            t.Completada,
            Categoria = new
            {
                t.Categoria.CategoriaId,
                t.Categoria.Nombre
            }
        })
        .ToListAsync();

    return Results.Ok(tareas);
});



app.Run();
