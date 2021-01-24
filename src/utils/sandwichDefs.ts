export interface ISandwich {
  bread: string;
  meats: Meats[];
  cheeses: Cheeses[];
  toppings: Toppings[];
  condiments: Condiments[];
  vegetarian?: boolean;
  vegan?: boolean;
  size: string;
  breadOut?: boolean;
  price: number;
}

export enum Meats {
  SALAMI,
  TURKEY,
  ROAST_BEEF,
  HAM,
  PASTRAMI,
  CHICKEN,
}

export enum Cheeses {
  PROVOLONE,
  CHEDDAR,
  PEPPER_JACK,
  AMERICAN,
  SWISS,
  MOZZARELLA,
}

export enum Toppings {
  LETTUCE,
  TOMATO,
  ONION,
  PEPPERS,
}

export enum Condiments {
  OIL_VINEGAR,
  MAYO,
  MUSTARD,
}
