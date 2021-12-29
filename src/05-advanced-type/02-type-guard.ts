{
  type Admin = {
    name: string;
    privileage: string[];
  };

  type Employee = {
    name: string;
    startDate: Date;
  };

  type Combinable = string | number;
  type Numberic = number | boolean;

  //universal of courses of type
  //- intersection operator can be used with any types
  type Universal = Combinable | Numberic;

  function add(a: Combinable, b: Combinable) {
    //still ensure out code runs correctly at runtime
    //-> use several combined type case
    if (typeof a === "string" || typeof a === "string") {
      return a.toString() + b.toString();
    }
    return +a + +b;
  }

  type UnknownEmployee = Admin | Employee;

  function printEmployeeInformation(emp: UnknownEmployee) {
    //if (typeof emp === "Employee") -- error
    //=> typeof only consider JS primitive type. not in the compiled JS wolrd....

    //각각 type alias가 보유하고 있는 property기준으로 check하면 됨.
    if ("privileage" in emp) {
      console.log("privileage : ", emp.privileage.join());
    }
    //
    if ("startDate" in emp) {
      console.log("startDate : ", emp.startDate);
    }
  }

  printEmployeeInformation({ name: "Dahye", startDate: new Date() });
  printEmployeeInformation({ name: "Daji", privileage: ["cutie🐕"] });

  // -----------------------------------------------------------------

  class Car {
    drive() {
      console.log("Driving!~~~Car🚗");
    }
  }
  class Truck {
    drive() {
      console.log("Driving!~~~Truck🚛");
    }
    loadCargo(amount: number) {
      console.log("Loading cargo...💫" + amount);
    }
  }
  type Vehicle = Car | Truck;
  const v1 = new Car();
  const v2 = new Truck();

  function useVehicle(vehicle: Vehicle) {
    vehicle.drive();

    //1. property type check
    // if('loadCargo' in  vehicle){
    //2. class type check
    //-> consturctor에 의해서 instance가 정해져서 property 대신 런타임기준의 isntanceOf 사용가능
    if (vehicle instanceof Truck) {
      vehicle.loadCargo(1000);
    }
  }
  useVehicle(v1);
  useVehicle(v2);
}
