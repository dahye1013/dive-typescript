interface Lengthy {
  length: number;
}
/**
 * set contraint and say T extetnds a Lengthy
 * => whatever, would have length property!
 * (whatever... array, or string)
 * More flexible than restrict!
 */
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no element 📒...";
  const elementLength: number = element.length;
  if (elementLength === 1) {
    descriptionText = "Got 1 element.";
  } else if (elementLength > 1) {
    descriptionText = `Got ${elementLength} elements!`;
  }
  return [element, descriptionText];
}
console.log(countAndDescribe("Hi, This is Dahye")); //[[ 'Hi, This is Dahye', 'Got 17 elements!' ]
console.log(countAndDescribe(["dahye", "daji"])); //[ [ 'dahye', 'daji' ], 'Got 2 elements!' ]
console.log(countAndDescribe([])); //[ [], 'Got no element 📒...' ]
