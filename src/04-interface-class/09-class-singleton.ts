/**
 * [Singleton]
 * - There is pattern in object oriented programming which is called the singleton
 */

{
  abstract class Department {
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {}
    abstract describe(this: Department): void;

    addEmployee(employee: string) {
      this.employees.push(employee);
    }
    printEmployeeInformation() {
      console.log(this.employees);
    }
  }

  class AccountDepartment extends Department {
    private lastReport!: string;
    private static instance: AccountDepartment;
    get mostRecentReport() {
      if (this.lastReport) {
        return this.lastReport;
      }
      throw new Error("No Report Found");
    }
    set mostRecentReport(value: string) {
      if (!value) {
        throw new Error("please pass in a valid value😥");
      }
      this.addReport(value);
    }
    /**
     * make private constructor
     * -> only accessible with in class
     * => make static method that can be called on the class itself
     */
    private constructor(id: string, private reports: string[]) {
      super(id, "Accounting");
    }

    static getInstance() {
      if (AccountDepartment.instance) {
        return this.instance;
      }
      //demarked code - can only run once
      this.instance = new AccountDepartment("d2", []);
      return this.instance;
    }

    describe() {
      console.log(`ITDepartment ${this.id}`);
    }

    //overide
    addEmployee(name: string) {
      if (name === "Dahye") return; //Dahye의 경우 validation에 걸려서 못들어가게 override
      this.employees.push(name);
    }
    addReport(text: string) {
      this.reports.push(text);
      this.lastReport = text;
    }
    printReports() {
      console.log(this.reports);
    }
  }

  const accounting1 = AccountDepartment.getInstance();
  const accounting2 = AccountDepartment.getInstance();

  //this two shoulb be same instance
  console.log(accounting1, accounting2);
  console.log(accounting1 === accounting2);
}
