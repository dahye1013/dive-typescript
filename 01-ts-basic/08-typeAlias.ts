/**
 * [Type Alias Type]
 * - can encode more complex type definitions into own type
 * - can avoid typos down
 *      -> can simply save code, and also be clearer about intentions
 * 
 * - Type aliases can be used to "create" your own types
 *  not limited to storing union types though -  also provide an alias to a (possibly complex) object type

 */

{
  //reusable type alias here
  type Combinable = number | string;
  type ConversionDescriptor = "as-number" | "as-text";

  function combineTypeAlias(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor,
  ) {
    let result;
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
}
