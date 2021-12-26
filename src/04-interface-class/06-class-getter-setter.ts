/**
 * [Getter & Setter]
 */

{
  class Department {
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {}

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

  class ITDepartment extends Department {
    public admins: string[];
    constructor(id: string, admins: string[]) {
      //in the inheriting class and you have to excute it like a function
      super(id, "IT"); /**  call of base constructor  */
      this.admins = admins;
    }
  }

  class AccountDepartment extends Department {
    private lastReport!: string;
    /**
     * [Getter]
     *  - basically a property where excute a function or a method when retrieve a value;
     *  - allow as a developer to add more complex logic
     */
    //캡슐화해서 사용 가능
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

    constructor(id: string, private reports: string[]) {
      super(id, "Accounting");
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

  const it = new ITDepartment("I1", ["dahye"]);
  it.describe();
  it.addEmployee("dahye");
  it.addEmployee("daji");
  it.printEmployeeInformation();

  const accounting = new AccountDepartment("A1", []);
  // accounting.mostRecentReport; //-- error (No report found)
  accounting.addReport("Report1 : something went wrong");
  accounting.mostRecentReport = "recentRepost : Set Report"; //set
  // accounting.mostRecentReport = ''; //--error (please pass in valid value)
  console.log(accounting.mostRecentReport);
  accounting.printReports();
  accounting.addEmployee("Dahye");
  accounting.addEmployee("Dayoung");
}
