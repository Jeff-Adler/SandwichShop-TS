"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sandwich_1 = require("./models/sandwich");
const sandwichCatalog_1 = require("./models/sandwichCatalog");
const s1 = new sandwich_1.Sandwich("Bootlegger", sandwich_1.Breads.WHITE, [sandwich_1.Meats.ROAST_BEEF, sandwich_1.Meats.TURKEY], [sandwich_1.Cheeses.CHEDDAR], [sandwich_1.Toppings.LETTUCE, sandwich_1.Toppings.TOMATO], [sandwich_1.Condiments.OIL_VINEGAR, sandwich_1.Condiments.MAYO], sandwich_1.Sizes.WHOLE, 10, false, false, false);
const s2 = new sandwich_1.Sandwich("All-american", sandwich_1.Breads.WHITE, [sandwich_1.Meats.TURKEY], [sandwich_1.Cheeses.CHEDDAR], [sandwich_1.Toppings.LETTUCE, sandwich_1.Toppings.TOMATO], [sandwich_1.Condiments.OIL_VINEGAR, sandwich_1.Condiments.MAYO], sandwich_1.Sizes.WHOLE, 10, false, false, false);
const s3 = new sandwich_1.Sandwich("Italian", sandwich_1.Breads.WHITE, [sandwich_1.Meats.SALAMI], [sandwich_1.Cheeses.CHEDDAR], [sandwich_1.Toppings.LETTUCE, sandwich_1.Toppings.TOMATO], [sandwich_1.Condiments.OIL_VINEGAR, sandwich_1.Condiments.MAYO], sandwich_1.Sizes.WHOLE, 10, false, false, false);
const s4 = new sandwich_1.Sandwich("TEST", sandwich_1.Breads.WHITE, [sandwich_1.Meats.SALAMI], [sandwich_1.Cheeses.CHEDDAR], [sandwich_1.Toppings.LETTUCE, sandwich_1.Toppings.TOMATO], [sandwich_1.Condiments.OIL_VINEGAR, sandwich_1.Condiments.MAYO], sandwich_1.Sizes.WHOLE, 10, false, false, false);
const sc = sandwichCatalog_1.SandwichCatalog.getInstance(s1, s2, s3);
console.log(s1);
//# sourceMappingURL=app.js.map