{
  /**
   * [Discrimated type]
   * - it's a pattern which you can used when working iwth union types taht makes implementing type guards easier.
   * - eleminate the danger of mis typing
   */

  //even work with interfaces because this interface
  // -> forces every object built based on this!!!!
  interface Bird {
    //type assignment where we narrowed down the value
    type: "bird";
    flyingSpeed: number;
  }
  interface Horse {
    type: "horse";
    runningSpeed: number;
  }

  type Animal = Bird | Horse;
  function moveAnimal(animal: Animal) {
    let speed;
    //safety type check
    switch (animal.type) {
      case "bird":
        speed = animal.flyingSpeed;
        break;
      case "horse":
        speed = animal.runningSpeed;
        break;
    }
    console.log("Moving with speed !!✨" + speed);
  }
  moveAnimal({ type: "bird", flyingSpeed: 30 });
  moveAnimal({ type: "horse", runningSpeed: 40 });
}
