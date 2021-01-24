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
  SALAMI = "salami",
  TURKEY = "turkey",
  ROAST_BEEF = "roast beef",
  HAM = "ham",
  PASTRAMI = "pastrami",
  CHICKEN = "chicken",
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

  get isVegetarian() {
    return this.vegetarian;
  }

  get isVegan() {
    return this.vegan;
  }

  get getMeats() {
    const meats = this.getIterableItem(this.meats);
    return meats;
  }

  private getIterableItem<T extends Meats | Cheeses | Toppings | Condiments>(
    items: Array<T>
  ) {
    return items.map((item: T) => {
      return console.log(item);
    });
  }
}
