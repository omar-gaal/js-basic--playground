// const user = {
//   name: "John",
//   age: 29,
// };

// const age = Object.keys(user).includes("age");

// if ("age" in user) {
//   console.log(user.age);
// }

// const monthlyExpenses = {
//   food: 400,
//   rent: 1700,
//   insurance: 550,
//   internet: 49,
//   phone: 95,
// };
// const numbers = Object.values(monthlyExpenses);

// const startNum = 0;
// const sumNum = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   startNum,
// );

// console.log(sumNum);

const student1 = {
  id: 1,
  name: "Reed",
  subjects: [],
  addSubject(subject) {
    this.subjects = [...this.subjects, subject];
  },
};
// constructor function
function Student(id, name, subjects) {
  this.id = id;
  this.name = "Omar";
  this.subjects = subjects;
}

console.log(new Student(student1));
