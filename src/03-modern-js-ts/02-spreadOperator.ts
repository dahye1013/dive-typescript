/**
 * spreadOperator sample
 */

{
  const hobbies = ["sports", "Cooking"];
  const activeHobbies = ["Hiking"];

  activeHobbies.push(...hobbies);

  const dog = {
    name: "daji",
    age: "5",
  };

  //created a new object here and just added to key value pairs
  //perfect copy of the original object and not just of the pointer that points to the object in memory
  const copiedDog = { ...dog };
}
