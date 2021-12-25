function add(n1: number, n2: number): number {
  return n1 + n2;
}

let combineValues: (a: number, b: number) => number;
combineValues = add; //같은 type function 할당

function printResult(num: number): void {
  console.log("result" + num);
}
/**
 *
 * typesciprt have undefined type <- 주의
 */

printResult(add(4, 12));

function addAndhandle(n1: number, n2: number, cb: (num: number) => void): void {
  const result = n1 + n2;
  // parameters a enforced and the entire ts is really strick regarding the number
  //callback으로 작동 될 인자가 무엇인지 specific 하게 한다.
  const value = cb(result);
}

addAndhandle(1, 20, () => {});
addAndhandle(1, 20, (result) => {
  console.log(result);
});

/**
 * callback functions can return something, even if the argument on which they're passed does NOT expect a returned value.
 * @param data
 * @param cb
 * @returns
 */
function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({ data: "Hi there!" });
}

sendRequest("Send this!", (response) => {
  console.log(response);
  return true;
});
