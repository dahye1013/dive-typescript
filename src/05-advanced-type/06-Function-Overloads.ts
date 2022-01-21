{
  type Combinable = string | number;

  //overload - Use specific type
  function add(a: number, b: number): number;
  function add(a: string, b: string): string;
  function add(a: string, b: number): string;
  function add(a: number, b: string): string;
  function add(a: Combinable, b: Combinable) {
    if (typeof a === "string" || typeof a === "string") {
      return a.toString() + b.toString();
    }
    return +a + +b;
  }

  const result1 = add(1, 5);
  console.log(result1); //6

  const result2 = add("dahye ", "daji");
  result2.split(" ");
  console.log(result2); //dahye daji

  const result3 = add("daji", 5);
  console.log(result3); //daji5
}
