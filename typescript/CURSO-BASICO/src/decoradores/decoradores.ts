// Implementación del decorador
function personaDeck(target: Function) {
  console.log(target);

  // Extendemos la funcionalidad añadiendo un nuevo método
  target.prototype.despedir = function(despedida: string): string {
    return despedida + " " + this.nombre;
  };
}

// Aplicación del decorador a la clase
@personaDeck
class Persona2 {
  nombre: string;
  edad: number;

  // Declaramos el método que será añadido por el decorador
  despedir!: (despedida: string) => string;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(saludo: string): string {
    return `${saludo}, mi nombre es ${this.nombre} y tengo ${this.edad} años`;
  }
}
