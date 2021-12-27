/**
 * [interface]
 * (simplest version)
 * -> describes the structure of an object
 *
 */

 interface Person {
    name: string; //no assign - interface can't have a initialized
    age: number;
  
    greet(phrase: string): void; //- not actual method, just structure
  }
  
  let user1: Person; //type check for object ! - that must have this structure
  
  user1 = {
    name: "Dahye",
    age: 2999,
    greet(phrase: string){
        console.log(phrase,`I am ${this.name}`)
    };
  };
  

  user1.greet('HI');