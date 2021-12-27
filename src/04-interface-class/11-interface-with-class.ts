/**
 * why do we need interface??
 * -> interface and a custom type are not exactly the same thing
 *
 * [Difference between custom type & interface]
 * 1. interfaces can only be used to describe the structure of an object
 *  -> custom type can be used by union... flexible
 * 2. interface is clearer
 *  -> define something as an interface, it's super clear that you want to define the structure of object
 *
 * 3. implement in a class
 *  -> interface can be used as a contract a class
 *  -> a class then has to adhere
 */

{
  interface Greetable {
    name: string;
    greet(phrase: string): void;
  }

  //follow that contract set up by interface
  //-> can implements more than one interface!!
  //=> compared to inheritance
  class Person implements Greetable {
    name: string;
    constructor(n: string) {
      this.name = n;
    }
    greet(phrase: string) {
      console.log(`${phrase}. I am ${this.name}`);
    }
  }

  //(Class)
  let user = new Person("Dahye");
  user.greet("Hello!!");

  //(Interface)
  let user1: Greetable;
  user1 = {
    name: "Dahye",
    // age: 2999, //--error - interface no defined
    greet(phrase: string) {
      console.log(phrase, `I am ${this.name}`);
    },
  };
}
