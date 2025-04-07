function sumar(...numeros: number[]): number {
    let resultado = 0;
    for (let i = 0; i < numeros.length; i++) {
      resultado += numeros[i];
    }
    return resultado;
  }
  
  const sumaTotal = sumar(1, 2, 3, 4, 5);
  console.log(sumaTotal); // Resultado: 15



  function sumars(...numeros: number[]): number {
    return numeros.reduce((acumulador, num) => acumulador + num, 0);
}

console.log(sumars(1, 2, 3, 4)); // Salida: 10