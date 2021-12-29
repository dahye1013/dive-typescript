/**
 * [interface]
 * (simplest version)
 * -> describes the structure of an object
 * 
 * 
 * mostly can replace them with custom types
 * ->also can implement customtypes
 * => but simply is more common to use an interface for describe object that want to implement it all the for historic reasons
 * => becuase ealier dsays of TS custom types couldn't be implemented or used like interface
 * 
 * 
 * (used links)
 * JS - mdn
 * ref :https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * 
 * TS - handbook
 * ref: https://www.typescriptlang.org/docs/handbook/2/objects.html
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