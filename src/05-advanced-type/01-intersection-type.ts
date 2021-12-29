{
  type Admin = {
    name: string;
    privileage: string[];
  };

  type Employee = {
    name: string;
    startDate: Date;
  };

  /**
   * in this case
   * interface, type have the exact same effect
   *
   * -> but, why would prefer to use types here instead of interface?
   * the realation definitely is very close and you could absolutely use interfaces for this example
   * => worth nothing !! whilst intersection types can be espcially useful when used in conjunction
   *
   */

  interface ElevatedEmployee extends Employee, Admin {}
  // type ElevatedEmployee = Admin & Employee;

  const el: ElevatedEmployee = {
    name: "Dahye",
    privileage: ["front"],
    startDate: new Date(),
  };

  type Combinable = string | number;
  type Numberic = number | boolean;

  //universal of courses of type
  //- intersection operator can be used with any types
  type Universal = Combinable | Numberic;
}
