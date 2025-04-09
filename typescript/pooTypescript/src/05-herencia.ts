export class Animal {
  constructor(public name: string) {}

  move() {
    console.log("Moving along!");
  }

  gretting() {
    return `Hello, I'm ${this.name}`;
  }
}

class Dog extends Animal {
  constructor(public owener: string, name: string) {
    super(name);
  }

  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log("Woof!");
    }
  }
}

const fifi = new Animal("Fifi");
fifi.move();
console.log(fifi.gretting());

const cheis = new Dog("Cheis", "Galeed");
cheis.move();
console.log(cheis.gretting());
cheis.woof(5);
