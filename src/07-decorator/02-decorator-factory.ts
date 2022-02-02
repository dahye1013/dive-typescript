/**
 * [Decorator Factory]
 * - Using decorator factories can give more power and more possibilities of configuring what the decorator intentionally
 * - coul accept a lock string
 * @param logString
 * @returns
 */
{
  function Logger(logString: string) {
    //return a new anonymous function take that constructor arg
    // excute this outer function and we attach the return value,
    return function (constructor: Function) {
      console.log(logString); //LOGGING - PERSON
      console.log("Logging...");
      console.log(constructor);
    };
  }

  @Logger("LOGGING - PERSON")
  class Person {
    name = "dahye";
    consturctor() {
      console.log("creating person");
    }
  }

  const person = new Person();
}
