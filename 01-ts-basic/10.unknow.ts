/**
 * we can store any type
 */
let userInput: unknown;
let userAnyInput: any;
let userName: string;

userInput = 5;
userInput = "dahye";

userName = userInput; //error

userAnyInput = userInput; //not error - any is most flexible type and ts disables all type checking
//=> it's like ts give up😅

if (typeof userInput === "string") {
  userName = userInput;
}
/**
 * !!! unknow is better than any!!!
 * => becuase it make sure that not allowed to do everything
 *
 */

function generateError(message: string, code: number): never {
  throw { message, code };
  //throw cancel out script and this will alway be the case for dysfunction
  while (true) {}
}

generateError("An error occured!", 500);
