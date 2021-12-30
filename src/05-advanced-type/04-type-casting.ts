//React에서는 Tag 방식으로 케스팅 가능
const userInputElementReactVersion = <HTMLInputElement>(
  document.getElementById("user-input")!
);

// this yield value of type HTML input element and there again we got no error!
//as를 사용한 casting
const userInputElementJS = document.getElementById(
  "user-input",
)! as HTMLInputElement;

//wrap the expression - to make sure is svaluated first
const userInputElement = document.getElementById("user-input");
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "HI There";
}
