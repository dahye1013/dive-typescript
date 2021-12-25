{
  enum Role {
    ADMIN = 5, //if don't want start with zero, can add identifier number
    READ_ONLY = "READ_ONLY", //add string
    AUTHOR = 100,
  }

  const person = {
    name: "daji",
    age: 5,
    hobbies: ["Sport", "Cooking"],
    role: Role.ADMIN,
  };

  console.log(Role.ADMIN); //5
  console.log(Role.READ_ONLY); //READ_ONLY
  console.log(Role.AUTHOR); // 100
}
