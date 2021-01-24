import {
  ISandwich,
  Meats,
  Cheeses,
  Toppings,
  Condiments,
} from "./utils/sandwichDefs";

const s1: ISandwich = {
  bread: "Whole Wheat",
  meats: [Meats.SALAMI],
  cheeses: [Cheeses.CHEDDAR],
  toppings: [Toppings.LETTUCE, Toppings.TOMATO],
  condiments: [Condiments.OIL_VINEGAR, Condiments.MAYO],
  vegetarian: false,
  size: "Whole",
  breadOut: false,
  price: 10,
};

const s2: ISandwich = {
  bread: "White",
  meats: [Meats.HAM],
  cheeses: [Cheeses.CHEDDAR],
  toppings: [Toppings.LETTUCE, Toppings.TOMATO, Toppings.ONION],
  condiments: [Condiments.MUSTARD],
  vegetarian: false,
  size: "Whole",
  breadOut: false,
  price: 10,
};

const sandwichShop: ISandwich[] = [s1, s2];
console.log(sandwichShop);
