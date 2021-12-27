/**
 * interface can extends interface
 * - can implement named , other can writable and forced to have both
 * - ✔️ can extend more than one!
 *  -> class can't - class can inherit only one
 *
 */

{
  interface Named {
    readonly name: string;
  }
  interface Aged {
    readonly age: string;
  }

  interface Greetable extends Named, Aged {
    greet(phrase: string): void;
  }

  class Person implements Greetable {
    name: string;
    age: string;
    constructor(n: string) {
      this.name = n;
    }
    greet(phrase: string) {
      console.log(`${phrase}. I am ${this.name}`);
    }
  }

  let user = new Person("Dahye");
  user.greet("Hello!!");
  user.name = "daye";
}
