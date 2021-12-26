/**
 * arrow function sample
 */

{
  const add = (a: number = 0, b: number = 0) => a + b;
}

/**
 * function 표현 방식 차이
 * 1. assign 하면서 타입지정
 * 2. 변수자체에 타입 지정
 *
 */
{
  //1
  const printOut = (output: string | number) => console.log(output);
  printOut(add(1, 2));
}
{
  //2
  const printOut: (ouput: string | number) => void = (output) =>
    console.log(output);
  printOut(add(1, 2));
}

{
  const button = document.querySelector("button");
  if (button) {
    button.addEventListener("click", (e) => console.log(e));
  }
}
