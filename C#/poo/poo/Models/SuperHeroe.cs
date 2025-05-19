using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using poo.Interfaces;

namespace poo.Models
{
    class Superheroe:Heroe, ISuperHeroe
    {
        // Atributos o propiedades
        //creamos una variable priva para manejar el encapsulamiento
        private string _NombreT;
        //estp es un ejemplo de encapsulamiento 
        public override string Nombre {
            get
            {
                return _NombreT;
            } // Trim quita los espacios en blanco al inicio y al final 
            set
            {
                _NombreT = value.Trim();
            }
        }
        public string IdentidadSecreta { get; set; }
        public string PoderPrincipal { get; set; }
        public int Edad { get; set; }
        public bool EsVengador { get; set; }
        public List<SuperPoder> poderes { get; set; } // Lista de poderes

        //otro ejemplo de encapsulamiento
        public string NombreEEntidadSecreta
        {
            get
            {
                return $"{Nombre} es ({IdentidadSecreta})";
            }
        }

        //constructor
        public Superheroe()
        {
            poderes = new List<SuperPoder>();
            EsVengador = false;
        }
        public string UsarPoder()
        {
            //foreach(var poder in poderes)
            //{
            //    Console.WriteLine($"{Nombre} Usando el poder: {poder.Nombre}");
            //}
            StringBuilder sb = new StringBuilder();
            foreach (var poder in poderes)
            {
                sb.AppendLine($"{NombreEEntidadSecreta} Usando el poder: {poder.Nombre}");
            }
            return sb.ToString();
            ;
        }

        public override string salvarelmundo()
        {
            return $"{Nombre} salvará el mundo";
        }

        public override string salvarTierra()
        {
           /* return base.salvarTierra();*/ // Llama al método de la clase base
            // Sobreescribimos el método de la clase base
            return $"{Nombre} salvará la tierra desde superheroe";
        }
    }
}
