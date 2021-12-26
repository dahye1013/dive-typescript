{
  /**
   * [Literal Type]
   * - base on core type string numbers and so on
   * - specific type
   */

  {
    function combineLiteral(
      input1: number | string,
      input2: number | string,
      resultConversion: "as-number" | "as-text", //specific string
    ): number {
      let result;
      //calculation base on the type
      if (
        (typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number"
      ) {
        result = +input1 + +input2; //input is convetedto a numberand is guaranteed to be a number before combined
      } else {
        result = input1.toString() + input2.toString();
      }

      return result;
    }

    const combinedAges = combineLiteral(30, 26, "as-number");
    console.log(combinedAges);

    //   const combinedNumberAges = combine(30, 26, "as-nsafasfumber"); -- type error
    const combinedNumberAges = combine(30, 26);
    console.log(combinedNumberAges);

    const combinedNames = combine("dahye", "daji");
    console.log(combinedNames);
  }
}
