"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, desarrollador) {
        this.nombre = nombre;
        this.edad = edad;
        this.desarrollador = desarrollador;
    }
    Persona.prototype.saludar = function () {
        return "Hola, me llamo ".concat(this.nombre);
    };
    Persona.prototype.obtenerEdad = function () {
        return this.edad;
    };
    Persona.prototype.esDev = function () {
        return this.desarrollador;
    };
    return Persona;
}());
exports.Persona = Persona;
