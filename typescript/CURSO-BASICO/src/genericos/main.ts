function identity<T>(arg:T):T{
  return arg
}

let salida= identity<string>('soy una cadena')
console.log(salida)

let numerico=identity<number>(45)
console.log(numerico)
