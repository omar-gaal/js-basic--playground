// const user = {
//   name: "John",
//   age: 29,
// };

// const age = Object.keys(user).includes("age");

// if ("age" in user) {
//   console.log(user.age);
// }

const monthlyExpenses = {
  food: 400,
  rent: 1700,
  insurance: 550,
  internet: 49,
  phone: 95,
};
const numbers = Object.values(monthlyExpenses);

const startNum = 0;
const sumNum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  startNum,
);

console.log(sumNum);
