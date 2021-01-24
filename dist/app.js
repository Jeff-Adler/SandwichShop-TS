"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sandwichDefs_1 = require("./utils/sandwichDefs");
const s1 = {
    bread: "Whole Wheat",
    meats: [sandwichDefs_1.Meats.SALAMI],
    cheeses: [sandwichDefs_1.Cheeses.CHEDDAR],
    toppings: [sandwichDefs_1.Toppings.LETTUCE, sandwichDefs_1.Toppings.TOMATO],
    condiments: [sandwichDefs_1.Condiments.OIL_VINEGAR, sandwichDefs_1.Condiments.MAYO],
    vegetarian: false,
    size: "Whole",
    breadOut: false,
    price: 10,
};
const s2 = {
    bread: "White",
    meats: [sandwichDefs_1.Meats.HAM],
    cheeses: [sandwichDefs_1.Cheeses.CHEDDAR],
    toppings: [sandwichDefs_1.Toppings.LETTUCE, sandwichDefs_1.Toppings.TOMATO, sandwichDefs_1.Toppings.ONION],
    condiments: [sandwichDefs_1.Condiments.MUSTARD],
    vegetarian: false,
    size: "Whole",
    breadOut: false,
    price: 10,
};
const sandwichShop = [s1, s2];
console.log(sandwichShop);
//# sourceMappingURL=app.js.map