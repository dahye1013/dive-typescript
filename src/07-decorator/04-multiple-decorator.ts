{
  function Logger(logString: string) {
    console.log("1. Logger Factory");
    return function (constructor: Function) {
      console.log("4. ", logString); //LOGGING - PERSON
    };
  }

  function WithTemplate(template: string, hookId: string) {
    console.log("2. With Template Factory");
    return function (constructor: any) {
      console.log("3. With Template");
      const hookEl = document.getElementById("app");
      const p = new constructor();
      if (hookEl) {
        hookEl.innerHTML = template;
        hookEl.querySelector("h1")!.textContent = p.name;
      }
    };
  }

  /**
   * Decorator excute bottom up
   * - createtion of actual decorator functions happens in the order in which we specify these factroy
   * -> But, the excution of the actual decorator functions then happens bottom up
   */
  @Logger("Logging")
  @WithTemplate("<h1>Person</h1>", "app")
  class Person {
    name = "Dahye";
    consturctor() {
      console.log("creating person");
    }
  }

  const person = new Person();
}
