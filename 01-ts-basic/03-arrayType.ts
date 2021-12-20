const person = {
  name: "daji",
  age: 5,
  hobbies: ["Sport", "Cooking"],
};

let favoriteActivities: string[];
favoriteActivities = ["sport"];

// don't use too often because you'll lose the benefits typescript gives
let anyActivities: any[];
anyActivities = ["sport", 111];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  console.log(hobby.map((h) => h)); //Property 'map' does not exist on type 'string'.
}
