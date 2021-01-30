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

// Add values for every pointer for all enum
export enum Breads {
  WHITE = "white",
  WHOLE_WHEAT = "whole wheat",
  WRAP = "wrap",
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
  PROVOLONE = "provolone",
  CHEDDAR = "cheddar",
  PEPPER_JACK = "pepper jack",
  AMERICAN = "american",
  SWISS = "swiss",
  MOZZARELLA = "mozzarella",
}

export enum Toppings {
  LETTUCE = "lettuce",
  TOMATO = "tomato",
  ONION = "onion",
  PEPPERS = "peppers",
}

export enum Condiments {
  OIL_VINEGAR = "oil and vinegar",
  MAYO = "mayonnaise",
  MUSTARD = "mustard",
}

export enum Sizes {
  WHOLE = "whole",
  HALF = "half",
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
