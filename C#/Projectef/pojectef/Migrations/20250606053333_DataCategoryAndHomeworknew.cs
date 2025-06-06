using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace pojectef.Migrations
{
    /// <inheritdoc />
    public partial class DataCategoryAndHomeworknew : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Tarea",
                keyColumn: "TareaId",
                keyValue: new Guid("c4e0d0e7-5f06-48c7-9246-11fe12f2c100"),
                columns: new[] { "Completada", "FechaCreacion" },
                values: new object[] { false, new DateTime(2024, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified) });

            migrationBuilder.UpdateData(
                table: "Tarea",
                keyColumn: "TareaId",
                keyValue: new Guid("c4e0d0e7-5f06-48c7-9246-11fe12f2c101"),
                columns: new[] { "Completada", "FechaCreacion" },
                values: new object[] { true, new DateTime(2024, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified) });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Tarea",
                keyColumn: "TareaId",
                keyValue: new Guid("c4e0d0e7-5f06-48c7-9246-11fe12f2c100"),
                columns: new[] { "Completada", "FechaCreacion" },
                values: new object[] { null, new DateTime(2025, 6, 6, 0, 29, 28, 961, DateTimeKind.Local).AddTicks(1689) });

            migrationBuilder.UpdateData(
                table: "Tarea",
                keyColumn: "TareaId",
                keyValue: new Guid("c4e0d0e7-5f06-48c7-9246-11fe12f2c101"),
                columns: new[] { "Completada", "FechaCreacion" },
                values: new object[] { null, new DateTime(2025, 6, 6, 0, 29, 28, 963, DateTimeKind.Local).AddTicks(1397) });
        }
    }
}
