//opcional la icudad usando ?
interface Direccion {
  calle: string;
  numero: number;
  ciudad?: string;
}

let direccion: Direccion = {
  calle: 'av huancavelica',
  numero: 5421,
};
console.log(direccion);

//propiedad  readonly
interface Persona {
  readonly nombres: string;
  readonly edades: number;
  readonly esDesarrollador: boolean;
}

let personaRead: Persona = {
  nombres: 'Admin',
  edades: 32,
  esDesarrollador: false,
};
console.log(personaRead);


//Interface extendida

interface Empleado extends Persona{
  readonly puesto:string
}
