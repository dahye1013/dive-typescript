/**
 * [Optional properties]
 * - by adding a questionmark
 * - this tells TS that this property might exist in classes that implements this interface
 *  =>but does not have to
 *
 * if compile interface?
 * -> see nothing... not see any translations for interface
 *
 */

{
  interface Named {
    readonly name?: string;
    //(optional) - not force every class based on to that this(outputName)
    outputName?: string;
  }

  interface Aged {
    readonly age: number;
  }

  interface Greetable extends Named, Aged {
    greet(phrase: string): void;
  }

  class Person implements Greetable {
    name?: string;
    age = 30;
    //outputName option - not reuqired
    constructor(n?: string) {
      //optional parameter - providing a default full back value or undefined
      if (n) {
        this.name = n; //존재할때만 assign - dont need to initialized
      }
    }
    greet(phrase: string) {
      //name이 존재하는 경우와 아닌 경우 분리
      if (this.name) console.log(`${phrase}. I am ${this.name}`);
      else console.log("Hello");
    }
  }
}
