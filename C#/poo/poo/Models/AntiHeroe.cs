using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace poo.Models
{
    internal class AntiHeroe:Superheroe
    {

        public string Accion(string action) {

            return $"{Nombre} es un antiheroe y {action}";
        }
    }
}
