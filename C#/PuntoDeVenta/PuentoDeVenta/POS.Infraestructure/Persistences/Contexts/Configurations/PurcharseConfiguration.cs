﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using POS.Domain.Entities;

namespace POS.Infraestructure.Persistences.Contexts.Configurations
{
    public class PurcharseConfiguration : IEntityTypeConfiguration<Purcharse>
    {
        public void Configure(EntityTypeBuilder<Purcharse> builder)
        {
            builder.HasKey(e => e.PurcharseId).HasName("PK__Purchars__A98C674B3AEF68EB");

            builder.Property(e => e.Tax).HasColumnType("decimal(18, 2)");
            builder.Property(e => e.Total).HasColumnType("decimal(18, 2)");

            builder.HasOne(d => d.Provider).WithMany(p => p.Purcharses)
                .HasForeignKey(d => d.ProviderId)
                .HasConstraintName("FK__Purcharse__Provi__0F624AF8");

            builder.HasOne(d => d.User).WithMany(p => p.Purcharses)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__Purcharse__UserI__10566F31");
        }
    }
}
