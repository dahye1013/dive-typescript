/**
 * [class-readonly]
 * - good to be clear define code
 *  1. when forget what want to do if i paused working on this code for couple of weeks
 *  2. working in team or sharing code with people
 *
 * - good idea to write clear and explicit code
 */

{
  class Department {
    constructor(private readonly id: string, public name: string) {
      this.id = id;
      this.name = name;
    }
    printId(this: Department) {
      console.log(`PrintId ${this.id}`);
    }
  }

  const accounting = new Department("A1", "Accounting");
  //readonly인 id 속성을 내부에서만 access
  // console.log(accounting.id)
  accounting.printId();
}
