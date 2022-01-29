/**
 *
 * Generic exist in Ts, not in vanilla Js.
 * There is no real translsation, but can utilize them in TS.
 *
 * Generic is being able to create a components that can work over a variety of types rather than a single one.
 *
 * Generic Types help to get additional type information.
 * => if build own generic classes of functions
 *
 * ref: https://www.typescriptlang.org/docs/handbook/2/generics.html
 */

// array used other types because it's stored dats in ti date of certain types
const names: Array<string> = []; //string[]

// main type is pormise, but a promise, just like an array kind of works together with other types!!!
// Pormise works together with other types because it kind of returns some data of some type.
const promise: Promise<any> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("⏰ ⏰");
  }, 2000);
});

promise.then((data) => {
  console.log(data.split(" ")); //[ '⏰', '⏰' ]
});
