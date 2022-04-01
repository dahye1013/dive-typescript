/**
 * Decorator in general all all about classes.
 * - Decorator's excute when class is defined
 * => not when it is instantiate it.
 * (do not need to instaitate class at all)
 * => could remove that code for instantiating the class and would still get death decorator output.
 *
 * 🌟🌟🌟
 * - Decorator runs when JS finds class definition.
 *  (consturctor definition)
 * => not when use that constructor function to instantiate an object!
 *
 */

{
  // a lot of decorator out here in lbraries ight use that use uppercase starting
  function Logger(constructor: Function) {
    console.log("Logging...");
    console.log(constructor);
  }

  @Logger
  class Person {
    name = "dahye";
    consturctor() {
      console.log("creating person");
    }
  }

  const person = new Person();
}
