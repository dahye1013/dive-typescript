{
  function WithTemplate(template: string, hookId: string) {
    //⭐️ tip : add underscore as a name which basically signals to TS.
    // -> know get this arg, but don't need it.
    return function (constructor: any) {
      const hookEl = document.getElementById("app");
      //create a new person here by calling constructor
      //(constructor is not normal function - type can't be Function)
      const p = new constructor();
      if (hookEl) {
        hookEl.innerHTML = template;
        hookEl.querySelector("h1")!.textContent = p.name;
      }
    };
  }

  @WithTemplate("<h1>Person</h1>", "app")
  class Person {
    name = "Dahye";
    consturctor() {
      console.log("creating person");
    }
  }

  const person = new Person();
}
