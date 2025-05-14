
using System.Text;
using poo.Models;

var poderVolar = new SuperPoder();
poderVolar.Nombre = "Volar";
poderVolar.Descripcion = "Capacidad de volar y razonar";
poderVolar.Nivel = NivelPoder.Medio;

var poderSuperFuerza = new SuperPoder();
poderSuperFuerza.Nombre = "Super Fuerza";
poderSuperFuerza.Descripcion = "Capacidad de levantar objetos pesados";
poderSuperFuerza.Nivel = NivelPoder.Alto;



var superheroe1 = new Superheroe();
superheroe1.Nombre = "   gabriel         ";
superheroe1.IdentidadSecreta = "gabo";
superheroe1.PoderPrincipal = "telepatia";
superheroe1.Edad = 25;
superheroe1.EsVengador = true;
List<SuperPoder> gabriel = new List<SuperPoder>();
gabriel.Add(poderVolar);
gabriel.Add(poderSuperFuerza);
superheroe1.poderes = gabriel;

//para un aniheroe
var wolvering = new AntiHeroe();
wolvering.Nombre = "   luis         ";
wolvering.IdentidadSecreta = "luisa";
wolvering.PoderPrincipal = "no se ";
wolvering.Edad = 50;
wolvering.EsVengador = false;

List<SuperPoder> poderesWolvering = new List<SuperPoder>();
poderesWolvering.Add(poderVolar);
poderesWolvering.Add(poderSuperFuerza);
wolvering.poderes = poderesWolvering;


string user=  superheroe1.UsarPoder();
Console.WriteLine(user);
Console.WriteLine(superheroe1.salvarelmundo());
Console.WriteLine(superheroe1.salvarTierra());

string resultWolvering = wolvering.UsarPoder();
Console.WriteLine(resultWolvering);
Console.WriteLine(wolvering.Accion("robar"));


enum NivelPoder
{
    Bajo,
    Medio,
    Alto
}