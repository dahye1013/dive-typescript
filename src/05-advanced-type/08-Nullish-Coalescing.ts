{
  const userInput = "";
  let storedData = userInput || "DEFAULT";
  console.log(storedData); //'DEFAULT'
  //if this is null or undefined , not an empty string zero
  storedData = userInput ?? "DEFAULT";
  console.log(storedData); //empty string
}
