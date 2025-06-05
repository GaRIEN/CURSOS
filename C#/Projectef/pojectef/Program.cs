using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pojectef;

var builder = WebApplication.CreateBuilder(args);

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

// Health check
app.MapGet("/dbconexion", async ([FromServices] TareaContext dbContext) =>
{
    var canConnect = await dbContext.Database.CanConnectAsync();
    return canConnect
        ? Results.Ok("Base de datos conectada correctamente.")
        : Results.Problem("No se pudo conectar a la base de datos.");
});

app.Run();
