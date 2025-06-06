using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace pojectef.Migrations
{
    /// <inheritdoc />
    public partial class DataCategoryAndHomework : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Descripcion",
                table: "Tarea",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<bool>(
                name: "Completada",
                table: "Tarea",
                type: "bit",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "bit");

            migrationBuilder.AlterColumn<string>(
                name: "Descripcion",
                table: "Categoria",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.InsertData(
                table: "Categoria",
                columns: new[] { "CategoriaId", "Descripcion", "Nombre", "peso" },
                values: new object[,]
                {
                    { new Guid("c4e0d0e7-5f06-48c7-9246-11fe12f2c602"), null, "Personal activities", 50 },
                    { new Guid("c4e0d0e7-5f06-48c7-9246-11fe12f2c657"), null, "Pending activities", 20 }
                });

            migrationBuilder.InsertData(
                table: "Tarea",
                columns: new[] { "TareaId", "CategoriaId", "Completada", "Descripcion", "FechaCreacion", "Prioridad", "Titulo" },
                values: new object[,]
                {
                    { new Guid("c4e0d0e7-5f06-48c7-9246-11fe12f2c100"), new Guid("c4e0d0e7-5f06-48c7-9246-11fe12f2c657"), null, null, new DateTime(2025, 6, 6, 0, 29, 28, 961, DateTimeKind.Local).AddTicks(1689), 1, "Payment of public services" },
                    { new Guid("c4e0d0e7-5f06-48c7-9246-11fe12f2c101"), new Guid("c4e0d0e7-5f06-48c7-9246-11fe12f2c602"), null, null, new DateTime(2025, 6, 6, 0, 29, 28, 963, DateTimeKind.Local).AddTicks(1397), 2, "Finish watching movie" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Tarea",
                keyColumn: "TareaId",
                keyValue: new Guid("c4e0d0e7-5f06-48c7-9246-11fe12f2c100"));

            migrationBuilder.DeleteData(
                table: "Tarea",
                keyColumn: "TareaId",
                keyValue: new Guid("c4e0d0e7-5f06-48c7-9246-11fe12f2c101"));

            migrationBuilder.DeleteData(
                table: "Categoria",
                keyColumn: "CategoriaId",
                keyValue: new Guid("c4e0d0e7-5f06-48c7-9246-11fe12f2c602"));

            migrationBuilder.DeleteData(
                table: "Categoria",
                keyColumn: "CategoriaId",
                keyValue: new Guid("c4e0d0e7-5f06-48c7-9246-11fe12f2c657"));

            migrationBuilder.AlterColumn<string>(
                name: "Descripcion",
                table: "Tarea",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "Completada",
                table: "Tarea",
                type: "bit",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "bit",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Descripcion",
                table: "Categoria",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);
        }
    }
}
