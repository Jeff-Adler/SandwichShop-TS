import {
  ISandwich,
  Breads,
  Meats,
  Cheeses,
  Toppings,
  Condiments,
  Sizes,
} from "../utils/sandwichDefs";

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
