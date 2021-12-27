/**
 * interface not possible to add public/private
 * -> only can add readonly
 */
{
  interface Greetable {
    //private name: string; //not possible
    readonly name: string; // can't be changed after object has been initialized <--need
    greet(phrase: string): void;
  }

  type GreetableType = {
    //이런식도 가능
    readonly name: string;
    greet(phrase: string): void;
  };

  class Person implements Greetable {
    name: string;
    constructor(n: string) {
      this.name = n;
    }
    greet(phrase: string) {
      console.log(`${phrase}. I am ${this.name}`);
    }
  }

  let user = new Person("Dahye");
  user.greet("Hello!!");

  //error 날거라고 추론했는데 실제로는 나지 않았음.
  //implements한 class에 readonly 선언해야 실제로 걸림
  //=> TODO: inferface 할당 관련해서 더 찾아보기
  user.name = "daye";
}
