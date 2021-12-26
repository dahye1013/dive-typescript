/**
 * [override & protected]
 * - base class private은 자식에서 접근 할 수 없음.
 *  -> override해서 부모에게 접근하는 경우 protected로 변경해서 사용해야함.
 */

{
  class Department {
    /**
     * override시, 자식에서도 접근 가능하도록 protected
     * AccountDepartment - addEmployee() 참고
     */
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
  accounting.addReport("Report1 : something went wrong");
  accounting.printReports();
  accounting.addEmployee("Dahye"); //override메소드에 건 제한으로 인해 push 불가
  accounting.addEmployee("Dayoung");
  accounting.printEmployeeInformation();
}
