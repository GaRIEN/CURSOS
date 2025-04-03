import {Empleado} from './empleado'

let empleado = new Empleado('Gabriel',39,true,'desarrollador junior')
console.log(empleado.saludar())
console.log(empleado.obenerinfo())

console.log("Angel", empleado.nombre)
