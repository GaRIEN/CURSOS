export abstract class Animal {
  constructor(protected name: string) {}

  move() {
    console.log("Moving along!");
  }

  gretting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(public owener: string, name: string) {
    super(name);
  }

  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log(`ẁoff, ${this.name}`);
    }
  }
  move() {
    console.log("hola se mueve como perro");
    super.move();
  }
}

const cheis = new Dog("Cheis", "Galeed");
//   cheis.name="segundo nombre"
console.log(cheis.woof(2));
cheis.move();
//   cheis.move();
//   console.log(cheis.gretting());
//   cheis.woof(5);
