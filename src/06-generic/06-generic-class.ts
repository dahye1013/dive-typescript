/**
 * 📖 Generic Class 📖
 * item turn into a generic class
 * -> becuase might not care about the type of data
 * => to make sure it's uniform data
 *
 * lock in a certain type
 * -> used the same type throughtout the entire class instance
 * - create use the same type throughtout the entire functions
 * (if use union type, we have to check type of values every time methods gets called)
 * */

class DataStorage<T extends string | number | boolean> {
  //setting constraint
  //used an identifier
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems(): T[] {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Dahye");
textStorage.addItem("Daji");
textStorage.removeItem("Dahye");
console.log(textStorage.getItems()); //[ 'Daji' ]

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
console.log(numberStorage.getItems()); // [ 2 ]

class ObjStorage<T extends object> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems(): T[] {
    return [...this.data];
  }
}

const objStorage = new ObjStorage<object>();
const dahye = { name: "Dahye" };
objStorage.addItem(dahye);
objStorage.addItem({ name: "Daji" });
objStorage.removeItem({ name: "Dahye" }); // technically is brand new object in memory and has a diffrent address
objStorage.removeItem(dahye);
console.log(objStorage.getItems()); //[ { name: 'Daji' } ]
