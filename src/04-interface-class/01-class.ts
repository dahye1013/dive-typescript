/**
 * [class]
 * in the end are sytactic sugar for dead
 * -> es5 version으로 compile시, 즉시실행 function을 할당하여 후, 내부에서 data 매핑하고 return값을 주는 것을 확인 할 수 있다.
 */

{
  class Department {
    name: string;
    /**
     * [consturctor]
     * - essentially a function tied to this class
     * - tied to any object that create base on the class
     * - whcich is excuted when the object is being created
     * -> do some initiailization work for the object
     */
    constructor(n: string) {
      this.name = n;
    }
    describe() {
      console.log("This Department is " + this.name);
    }
  }

  const accounting = new Department("Accounting");
  console.log(accounting);
  accounting.describe();

  const accountingCopy = { describe: accounting.describe };
  //this instance is created with the object literal, not based on class
  //-> dummy object, - this에 refer 접근할 내부 객체가 존재하지 않아서 undfined 출력
  accountingCopy.describe(); //undefined
}
