import { Sandwich } from "./sandwich";

export class SandwichCatalog {
  private static instance: SandwichCatalog;
  private list: Sandwich[] = [];

  private constructor(sandwiches: Sandwich[]) {
    this.list = sandwiches;
  }

  static getInstance(...args: Sandwich[]) {
    if (this.instance) return this.instance;

    this.instance = new SandwichCatalog(args);
    return this.instance;
  }

  get getCatalog() {
    return this.list;
  }

  addSandwich(this: SandwichCatalog, sandwich: Sandwich) {
    this.list.push(sandwich);
  }

  removeSandwich(this: SandwichCatalog, name: string) {
    this.list = this.list.filter((sandwich: Sandwich) => {
      return sandwich.name !== name;
    });
  }
}
