using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pojectef;
using pojectef.Models;
using System.Runtime.Serialization;

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


app.MapGet("/api/tareas/{id}", async ([FromServices] TareaContext dbContext, Guid id) =>
{
    var tarea = await dbContext.Tareas
        .Include(p => p.Categoria)
        .Where(t => t.TareaId == id)
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
        .FirstOrDefaultAsync();
    return tarea != null ? Results.Ok(tarea) : Results.NotFound();
});

app.MapPost("/api/tareas", async ([FromServices] TareaContext dbContext, [FromBody] Tarea tarea) =>
{
    if (tarea == null)
    {
        return Results.BadRequest("Tarea no puede ser nula.");
    }

    tarea.TareaId = Guid.NewGuid(); // Generar nuevo ID
    tarea.FechaCreacion = DateTime.UtcNow; // Asignar fecha de creación actual
    await dbContext.Tareas.AddAsync(tarea);
    await dbContext.SaveChangesAsync();
    return Results.Ok();
});

app.MapPut("/api/tareas/{id}", async ([FromServices] TareaContext dbContext, [FromBody] Tarea tarea, [FromRoute] Guid id) =>
{
    var tareaActual = await dbContext.Tareas.FindAsync(id);
    if (tareaActual == null)
    {
        return Results.NotFound();
    }

    tareaActual.CategoriaId = tarea.CategoriaId;
    tareaActual.Titulo = tarea.Titulo;
    tareaActual.Prioridad = tarea.Prioridad;
    tareaActual.Descripcion = tarea.Descripcion;

    await dbContext.SaveChangesAsync();
    return Results.Ok();
});

app.MapDelete("/api/tareas/{id}", async ([FromServices] TareaContext dbContext, [FromRoute] Guid id) =>
{
    var tarea = await dbContext.Tareas.FindAsync(id);
    if (tarea == null)
    {
        return Results.NotFound();
    }

    dbContext.Tareas.Remove(tarea);
    await dbContext.SaveChangesAsync();

    return Results.Ok();
});




app.Run();

