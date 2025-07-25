﻿using System;
using System.Collections.Generic;

namespace SistemaVenta.Entity.Models;

public partial class Categoria

{
    public int IdCategoria { get; set; }

    public string? Descripcion { get; set; }

    public bool? EsActivo { get; set; }

    public DateTime? FechaRegistro { get; set; }

    public virtual ICollection<Producto> Productos { get; set; } = new List<Producto>();
}
