export class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
      this.nombre = nombre;
      this.edad = edad;
  }

  saludar() {
      return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
  }
}

