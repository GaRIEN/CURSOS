﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using POS.Domain.Entities;

namespace POS.Infraestructure.Persistences.Contexts.Configurations
{
    public class DepartmentConfiguration : IEntityTypeConfiguration<Department>
    {
        public void Configure(EntityTypeBuilder<Department> builder)
        {
            builder.HasKey(e => e.DepartmentId).HasName("PK__Departme__B2079BED93276DF7");

            builder.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false);
        }
    }
}
