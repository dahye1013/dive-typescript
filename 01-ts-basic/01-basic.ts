/**
 * [Important: Type Casing]
 * In TypeScript, you work with types like string or number all the times.
 * It is string and number (etc.), NOT String, Number etc.
 * The core primitive types in TypeScript are all lowercase!
 */

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  //none ts version
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("Incorrect Input");
  }
  const result = n1 + n2;
  if (showResult) {
    console.log(printPhrase + result);
  } else return n1 + n2;
}

const number1: number = 5;
const number2: number = 2.8;
const printResult: boolean = true;
const printPhrase: string = "result is";
add(number1, number2, printResult, printPhrase);
