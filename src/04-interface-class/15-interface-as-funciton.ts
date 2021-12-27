/**
 *
 */

{
  type addFn1 = (a: number, b: number) => number;
  let add1: addFn1;
  add1 = (n1: number, n2: number) => {
    return n1 + n2;
  };
  //interface alternative to this custom type interface
  // -> in the end, functions are just objects and this is a little exception

  interface addFn2 {
    (a: number, b: number): number; //anonymous function - just like how function look like
  }
  let add2: addFn2;
  add2 = (n1: number, n2: number) => {
    return n1 + n2;
  };
}
