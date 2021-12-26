/**
 * [abstract]
 *
 * want to ensure that a certain method is available in all classes based on some base class
 * exact implementation will depend on the specific version
 *
 * => userful forest that all classes based on some upper
 *
 * (situation)
 * -> cant' provide a general methods but want to enforce the mothos exist
 * => but the inheriting classeswill need to provide their own implementation,
 *    when default implementation and the base class
 *
 */

{
  //(abstract class)
  abstract class Department {
    protected employees: string[] = [];
    //(abstract properties)
    //- want to make sure dont have to concrete value, concrete implementation and the base class

    constructor(protected readonly id: string, public name: string) {}

    //Abstract methods can only appear within an abstract class
    // Define how this method should look like what its structure
    //(abstract method)
    abstract describe(this: Department): void;

    addEmployee(employee: string) {
      this.employees.push(employee);
    }
    printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }

  class ITDepartment extends Department {
    public admins: string[];
    constructor(id: string, admins: string[]) {
      super(id, "IT");
      this.admins = admins;
    }

    describe() {
      console.log(`ITDepartment ${this.id}`);
    }
  }

  const it = new ITDepartment("I1", ["dahye"]);
  it.describe();
  it.addEmployee("dahye");
  it.addEmployee("daji");
  it.printEmployeeInformation();
}
