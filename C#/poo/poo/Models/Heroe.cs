using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace poo.Models
{
    internal abstract class Heroe
    {
        public abstract string Nombre { get; set; }
        public abstract string salvarelmundo();

        public virtual string salvarTierra()
        {
            return $"{Nombre} salvará la tierra";
        }
    }
}
