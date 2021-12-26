/**
 * [class-access-modifier]
 * 1. public
 *  - 외부에서도 접근 가능
 * 2. private
 *  - 내부에서만 접근하도록 한다.
 *
 * ✨ tip
 * beside properties, methods can be 'private'
 */

{
  class Department {
    // private id: string;
    // public name: string;
    private employees: string[] = [];

    constructor(private id: string, public name: string) {
      this.id = id;
      this.name = name;
    }

    describe(this: Department) {
      console.log(`Department ${this.id} : ${this.name}`);
    }
    addEmployee(employee: string) {
      this.employees.push(employee);
    }
  }

  const accounting = new Department("A1", "Accounting");
  console.log(accounting);
  accounting.describe();

  accounting.addEmployee("dahye");
  accounting.addEmployee("daji");

  //✔️ employees is private property - 외부접근으로 변경 불가
  //accounting.employees[2] = "dddd"   /** employees is only use from insdie - error */
}
