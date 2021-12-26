/**
 * [Array sample]
 * Array elements are pulled out in order
 * -> array is an ordered list in objects
 */

{
  const hobbies = ["sports", "Cooking"];
  const activeHobbies = ["Hiking"];
  hobbies.push(...activeHobbies);

  //remainingHobbies - merged together into a new array
  //!!✔️ these structuring does not change to original array!!!
  const [hobby1, hobby2, ...remainingHobbies] = hobbies;

  console.log(hobbies);
  console.log(hobby1);
  console.log(hobby2);
  console.log(remainingHobbies);
}

/**
 * [Object sample]
 * Object is not alaways guranteed
 * and there we don't pull elements out by position
 * but by key
 */
{
  const dog = {
    name: "daji",
    age: "5",
  };
  //js syntax - renaming
  const { name: userName, age } = dog;
  console.log(userName, age);
}
