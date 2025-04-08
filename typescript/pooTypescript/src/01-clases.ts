class OperacionesBasicas {
  num1: number;
  num2: number;
  constructor(num1: number, num2: number) {
    this.num1 = num1;
    this.num2 = num2;
  }

  sumar(): number {
    return this.num1 + this.num2;
  }
  restar(): number {
    return this.num1 - this.num2;
  }
  multiplicar(): number {
    return this.num1 * this.num2;
  }
  dividir(): number {
    return this.num1 / this.num2;
  }
  potencia(): number {
    return this.num1 ** this.num2;
  }
  raizCuadrada(): number {
    return Math.sqrt(this.num1);
  }
  raizCubica(): number {
    return Math.cbrt(this.num1);
  }
}

let numbers = new OperacionesBasicas(5, 20);

console.log(numbers);
console.log(numbers.sumar());
console.log(numbers.potencia());
