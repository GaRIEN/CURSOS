function imprimeMensaje(mensaje: string): void {
  console.log(mensaje);
}

imprimeMensaje('hola mensa')


enum NumerosElegir {
  UNO = 1,
  DOS = 2,
  TRES = 3,
  CUATRO = 4,
  CINCO = 5,
}

type Multiplicador = {
  num1: number;
  num2: NumerosElegir;
}

function sumarTodo(...nums:number[]):number {
  return nums.reduce((a, b) => a + b, 0);
}

function Multiplicar(numero:Multiplicador):number {
  return numero.num1 * numero.num2;
}

function decirNumero(resultado:number, fraseInicial: string = "El resultado es:", fraseFinal?: string):void {
  console.log(`${fraseInicial} ${resultado} ${fraseFinal ? fraseFinal : ""}`);
}

const sumaTotal = sumarTodo(1,2,3,4,5,6,7,8,9,10,20)
const multiTotal = Multiplicar({num1: sumaTotal, num2: NumerosElegir.CUATRO})
const decirSuma = decirNumero(sumaTotal, "El resultado de la suma es:", "y eso es todo");
const decirMulti = decirNumero(multiTotal);
