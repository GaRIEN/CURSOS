using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using poo.Interfaces;

namespace poo
{
    internal class ImprimirInfo
    {

        public void ImprimirsuperHeroe(ISuperHeroe superheroee)
        {
            Console.WriteLine($"Nombre: {superheroee.Nombre}");
            Console.WriteLine($"Identidad Secreta: {superheroee.IdentidadSecreta}");
            Console.WriteLine($"Edad: {superheroee.Edad}");
        }
    }
}
