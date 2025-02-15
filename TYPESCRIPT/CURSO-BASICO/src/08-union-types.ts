(() => {
  let foo: string | boolean | number = 100;

  if (typeof foo === "string") {
    console.log(foo.toLowerCase()); // Convierte a minúsculas si es un string
  } else if (typeof foo === "number") {
    console.log(`El número es: ${foo}`); // Muestra el número de manera más descriptiva
  } else if (typeof foo === "boolean") {
    console.log(`El valor booleano es: ${foo}`); // Muestra el valor booleano
  } else {
    console.log("Tipo de dato no reconocido"); // Manejo de tipos inesperados
  }
})();
