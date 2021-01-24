interface ISandwich {
  bread: string;
  meat: string[];
  cheese: string[];
  toppings: string[];
  condiments: string[];
  vegetarian?: boolean;
  vegan?: boolean;
  size: string;
  breadOut?: boolean;
  price: number;
}

const s1: ISandwich = {
  bread: "Whole Wheat",
  meat: ["Salami"],
  cheese: ["Cheddar"],
  toppings: ["Lettuce", "Tomato"],
  condiments: ["Oil & Vinegar", "Mayo"],
  vegetarian: false,
  size: "Whole",
  breadOut: false,
  price: 10,
};

const s2: ISandwich = {
  bread: "White",
  meat: ["Salami"],
  cheese: ["Cheddar"],
  toppings: ["Lettuce", "Tomato"],
  condiments: ["Oil & Vinegar", "Mayo"],
  vegetarian: false,
  size: "Whole",
  breadOut: false,
  price: 10,
};

const sandwichShop: ISandwich[] = [s1, s2];
console.log(s1);
