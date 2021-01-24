import {
  Breads,
  Meats,
  Cheeses,
  Toppings,
  Condiments,
  Sizes,
  Sandwich,
} from "./models/sandwich";

import { SandwichCatalog } from "./models/sandwichCatalog";

const s1 = new Sandwich(
  "Bootlegger",
  Breads.WHITE,
  [Meats.ROAST_BEEF],
  [Cheeses.CHEDDAR],
  [Toppings.LETTUCE, Toppings.TOMATO],
  [Condiments.OIL_VINEGAR, Condiments.MAYO],
  Sizes.WHOLE,
  10,
  false,
  false,
  false
);

const s2 = new Sandwich(
  "All-american",
  Breads.WHITE,
  [Meats.TURKEY],
  [Cheeses.CHEDDAR],
  [Toppings.LETTUCE, Toppings.TOMATO],
  [Condiments.OIL_VINEGAR, Condiments.MAYO],
  Sizes.WHOLE,
  10,
  false,
  false,
  false
);

const s3 = new Sandwich(
  "Italian",
  Breads.WHITE,
  [Meats.SALAMI],
  [Cheeses.CHEDDAR],
  [Toppings.LETTUCE, Toppings.TOMATO],
  [Condiments.OIL_VINEGAR, Condiments.MAYO],
  Sizes.WHOLE,
  10,
  false,
  false,
  false
);

const s4 = new Sandwich(
  "TEST",
  Breads.WHITE,
  [Meats.SALAMI],
  [Cheeses.CHEDDAR],
  [Toppings.LETTUCE, Toppings.TOMATO],
  [Condiments.OIL_VINEGAR, Condiments.MAYO],
  Sizes.WHOLE,
  10,
  false,
  false,
  false
);

const sc = SandwichCatalog.getInstance(s1, s2, s3);
console.log(sc);
