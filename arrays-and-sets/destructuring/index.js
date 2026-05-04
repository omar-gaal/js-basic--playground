// const finalMenuItems = [
//   "American Cheeseburger",
//   "Southern Fried Chicken",
//   "Glazed Salmon",
// ];
// const [winner, ...others] = finalMenuItems;
// console.log({ winner, others });

const fishDishes = [
  "Salmon Rillettes",
  "Grilled Tuna Provencal",
  "Fish and Chips",
];
const meatDishes = ["Lasagna", "Spaghetti", "Satay Chicken Skewers"];

let [fishS, ...othersFishDishes] = fishDishes;
let [noS, sMeatDishesFirst, sMeatDishesSecond] = meatDishes;
let sDishes = [fishS, sMeatDishesFirst, sMeatDishesSecond];
let [normalMeatDish] = meatDishes;

// Modify these four variables first
let chefsFishDishes = sDishes;
let regularFishDishes = [othersFishDishes];

let chefsMeatDishes = [normalMeatDish];
let regularMeatDishes;

// Finally, use the spread operator to create these two arrays as well
let chefsDishes;
let regularDishes;
console.log(chefsMeatDishes);
