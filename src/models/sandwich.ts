export interface ISandwich {
  name: string;
  bread: Breads;
  meats: Meats[];
  cheeses: Cheeses[];
  toppings: Toppings[];
  condiments: Condiments[];
  size: Sizes;
  price: number;
  breadOut?: boolean;
  vegetarian?: boolean;
  vegan?: boolean;
}

export enum Breads {
  WHITE,
  WHOLE_WHEAT,
  WRAP,
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

export enum Sizes {
  WHOLE,
  HALF,
}

export class Sandwich implements ISandwich {
  constructor(
    public name: string,
    public bread: Breads,
    public meats: Meats[],
    public cheeses: Cheeses[],
    public toppings: Toppings[],
    public condiments: Condiments[],
    public size: Sizes,
    public price: number,
    public breadOut: boolean = false,
    public vegetarian: boolean = false,
    public vegan: boolean = false
  ) {}

  get getBread() {
    return this.bread;
  }

  set setBread(b: Breads) {
    this.bread = b;
  }

  get isVegetarian() {
    return this.vegetarian;
  }

  get isVegan() {
    return this.vegan;
  }
}
