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

  const fetchUserData = {
    id: "u1",
    name: "Dahye",
    job: { title: "Front-End Developer", description: "etc" },
  };

  console.log(fetchUserData);

  //JS way of checking where something exists before dive depper into debt - potential obj
  //the thing in front of the questionmark is undefined, it will not access
  //-> therefore will not flow a runtime error
  //=> instead not continue
  console.log(fetchUserData?.job?.title);
}
