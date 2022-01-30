/**
 * [key of constraint]
 * - ensure not to make dumb mistakes
 * => where we tried to call this function, which in the end would try to access a propery that doesn't exist
 *
 * @param obj - should be any kind of object
 * @param key - should be any kind of key in first parameter object
 * @returns
 */

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value " + obj[key];
}

extractAndConvert({ name: "dahye" }, "name"); // Value dahye ​​​​​
//extractAndConvert({ name: "dahye" }, "age");  // error
