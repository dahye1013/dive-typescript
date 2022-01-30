/**
 * [Static]
 * - static properties and methods allow you to add properties and methods to classes which are not accessed on an instance of the class.
 * - Don't need to call new class name first
 * - -> accessed directly on th class
 * - Often used for utility functions that want to group or map to a class logically or global constants which you always want to store in a class
 *
 *  ✔️ can't access them from insdie non static parts
 * -> because this does refer to the instasnce
 * -> if want to use the static property or a methods from insde have to use class name
 *
 * (example)
 * built into JS, which is not defined by TS and not defined by user
 * -> math constructor function of class
 * -> Math.Pi , Math.pow()
 *
 */

{
  class Department {
    protected employees: string[] = [];
    static fiscalYear = 2022;
    static createEmployee(name: string) {
      return { name: name };
    }

    constructor(private readonly id: string, public name: string) {
      //✔️ static can't access from inside -> `this` does refer to the instance
      //   console.log(this.fiscalYear)
      console.log(Department.fiscalYear);
    }

    describe(this: Department) {
      console.log(`Department ${this.id} : ${this.name}`);
    }
    addEmployee(employee: string) {
      this.employees.push(employee);
    }
    printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }

  const employee = Department.createEmployee("Dahye E");
  console.log(employee);
  console.log(Department.fiscalYear);
}
