export class Persona {
  // public es accesible desde cualquier parte
  public nombre: string;

  // protected solamente es accesible dentro de la clase y clases que hereden
  protected edad: number;

  // private solamente es accesible dentro de la clase
  private desarrollador: boolean;

  constructor(nombre: string, edad: number, desarrollador: boolean) {
      this.nombre = nombre;
      this.edad = edad;
      this.desarrollador = desarrollador;
  }

  public saludar(): string {
      return `Hola, me llamo ${this.nombre}`;
  }

  protected obtenerEdad(): number {
      return this.edad;
  }

  private esDev(): boolean {
      return this.desarrollador;
  }
}
