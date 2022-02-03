/**
 * [Property Decorator]
 * @param target
 * @param propertyName
 */
function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator");
  console.log(target, propertyName); // Product {} 'title'
}

/**
 * [Accessor Decorator]
 * @param target
 * @param name
 * @param descriptior
 */
function Log2(target: any, name: string, descriptior: PropertyDescriptor) {
  console.log("Log2 : Accessor decorator");
  console.log(target); // Product {}
  console.log(name); // price
  console.log(descriptior); // { get: undefined, set: [λ: set price], enumerable: false, configurable: true }
}

/**
 * [Method Decorator]
 * @param target
 * @param name
 * @param descriptior
 */
function Log3(
  target: any,
  name: string | Symbol,
  descriptior: PropertyDescriptor
) {
  console.log("Log3 : Method decorator");
  console.log(target); // Product {}
  console.log(name); // getPriceWithTax
  console.log(descriptior); // { value: [λ: getPriceWithTax], writable: true, enumerable: false, configurable: true }
}

/**
 * [Parameter Decorator]
 * @param target
 * @param name
 * @param position
 */
function Log4(target: any, name: string | Syombol, position: number) {
  console.log("Log4 : Parameter decorator");
  console.log(target); // Product {}
  console.log(name); // getPriceWithTax
  console.log(position); //0
}

class Product {
  // when exactly does this logger excute?
  //=> when class definition is registered by JS
  //=> So it excutes when define this peroperty basically to js as parts of class
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price");
    }
  }

  constructor(t: string) {
    this.title = t;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this.price * (1 + tax);
  }
}
