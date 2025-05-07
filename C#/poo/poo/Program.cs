
var poderVolar = new SuperPoder();
poderVolar.Nombre = "Volar";
poderVolar.Descripcion = "Capacidad de volar y razonar";
poderVolar.Nivel = NivelPoder.Medio;

var poderSuperFuerza = new SuperPoder();
poderSuperFuerza.Nombre = "Super Fuerza";
poderSuperFuerza.Descripcion = "Capacidad de levantar objetos pesados";
poderSuperFuerza.Nivel = NivelPoder.Alto;



var superheroe1 = new Superheroe();
superheroe1.Nombre = "gabriel";
superheroe1.IdentidadSecreta = "gabo";
superheroe1.PoderPrincipal = "telepatia";
superheroe1.Edad = 25;
superheroe1.EsVengador = true;
List<SuperPoder> gabriel = new List<SuperPoder>();
gabriel.Add(poderVolar);
gabriel.Add(poderSuperFuerza);
superheroe1.poderes = gabriel;



class Superheroe
    {
        // Atributos o propiedades
        public string Nombre { get; set; }
        public string IdentidadSecreta { get; set; }
        public string PoderPrincipal { get; set; }
        public int Edad { get; set; }
        public bool EsVengador { get; set; }
        public List<SuperPoder> poderes { get; set; } // Lista de poderes

    //constructor
    public Superheroe()
    {
        poderes = new List<SuperPoder>();
        EsVengador = false;
    }
}

class SuperPoder
{
    public string Nombre { get; set; }
    public string Descripcion { get; set; }
    public NivelPoder Nivel { get; set; }

}

enum NivelPoder
{
    Bajo,
    Medio,
    Alto
}