interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  readonly name: string;

  greet(phrase: string): void;
}

class Person implements Greetable, Named {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}

let user1: Greetable;

user1 = new Person('Dan');
// user1.name = 'Alex';

user1.greet('Hi there, I am');
console.log(user1);
