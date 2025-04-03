import { Persona } from './clase';

 export class Empleado extends Persona {
  public puesto: string;

  constructor(
    nombre: string,
    edad: number,
    desarrollador: true,
    puesto: string
  ) {
    super(nombre, edad, desarrollador);
    this.puesto = puesto;
  }

  public saludar(): string {
    return `${super.saludar()} trabajo con ${this.puesto}`
  }
  public obenerinfo(): string {
    return `tengo ${this.obtenerEdad()} años y  trabajo como ${this.puesto}`
  }
}
