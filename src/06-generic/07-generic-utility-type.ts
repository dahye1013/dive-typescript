//Utility Types
//ref : https://www.typescriptlang.org/docs/handbook/utility-types.html

/**
 * [Partial]
 * - initially partial kind of wraps our own type and change it to a type where all these properties
 */

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  descriptioin: string,
  date: Date
): CourseGoal {
  //=> all CourseGoal properties change to a optional!!!👍
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = descriptioin;
  courseGoal.completeUntil = date;
  //converting with typecasting - at this point, add all the datas
  //=> not a partial one!!!👍
  return courseGoal as CourseGoal;
}

/**
 * [ReadOnly]
 * - not allow to change properties
 * - useful when need to lock something down
 */
{
  const names: Readonly<String[]> = ["Dahye", "Daji"];
  // names.push('Dayoung'); //not allow
  // names.pop(); //not allow
}
