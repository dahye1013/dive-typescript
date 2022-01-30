//before constraint
{
  function merge<T, U>(objA: T, objB: U) {
    //this function returns the intersection of T and U
    return Object.assign(objA, objB);
  }
}

//after constraint
{
  /**
   * restrict types of T and U
   * -> type contraint for gneric types,
   * => set certain constraints regarding the types generic types can be based on
   *
   * - do this with extends keyword
   */
  function merge<T extends object, U extends object>(objA: T, objB: U) {
    //this function returns the intersection of T and U
    return Object.assign(objA, objB);
  }

  //Generic are all about this, -> but Ts simply infers the types of the values
  const mergedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
    { name: "daji", hobbies: ["Sleeping"] },
    { age: 5 }
  );
}
