using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VeggiTales.Data.Migrations
{
    /// <inheritdoc />
    public partial class DBChange : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Province",
                table: "AspNetUsers",
                type: "nvarchar(2)",
                maxLength: 2,
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Province",
                table: "AspNetUsers");
        }
    }
}
