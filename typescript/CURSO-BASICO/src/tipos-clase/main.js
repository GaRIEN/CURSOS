"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var empleado_1 = require("./empleado");
var empleado = new empleado_1.Empleado('Gabriel', 39, true, 'desarrollador junior');
console.log(empleado.saludar());
console.log(empleado.obenerinfo());
console.log("Angel", empleado.nombre);
