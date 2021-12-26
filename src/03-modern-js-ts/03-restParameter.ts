{
  //more generic and accept as manay arguments as i get
  // -> for dysfunction
  const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
      return curResult + curValue;
    }, 0);
  };
  const addedNumbers = add(5, 6, 7, 8);
  console.log(addedNumbers);
}
