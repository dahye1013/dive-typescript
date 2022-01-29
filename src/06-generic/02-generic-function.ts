//before using generic
{
  function merge(objA: object, objB: object) {
    return Object.assign(objA, objB);
  }
}

//after using generic
{
  /**
   * Typically start with T for a Type,
   * Doesn't have to be a single Charactor, but the conventions used a single character.
   * And typically, if you only have one generic type you named as 'T'.
   * The second Generic parameter or type using in a function typcially is named 'U'
   */
  function merge<T, U>(objA: T, objB: U) {
    //this function returns the intersection of T and U
    return Object.assign(objA, objB);
  }

  //Generic are all about this, -> but Ts simply infers the types of the values
  const mergedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
    { name: "daji", hobbies: ["Sleeping"] },
    { age: 5 }
  );
}
