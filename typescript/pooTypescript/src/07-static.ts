class Myclas {
  static max(...numbers: number[]) {
    return numbers.reduce(
      (max, item) => (max >= item ? max : item),
     -Infinity
    );
  }
}

console.log(Myclas.max(-101,-8,-94,-1452,-1,-9));