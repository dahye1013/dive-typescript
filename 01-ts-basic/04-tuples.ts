{
  const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
  } = {
    name: "daji",
    age: 5,
    hobbies: ["Sport", "Cooking"],
    role: [2, "author"], //(property) role: (string | number)[]
  };

  /**
   * Error
   */
  //person.role.push("admin"); //push error <- exception , typescript  can't catch
  //person.role[1] = 10; //<- this can be catch

  person.role = [0, "admin"];
}
