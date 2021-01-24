import { Sandwich } from "./sandwich";

class SandwichCatalog {
  private static instance: boolean;
  private list: Sandwich[] = [];

  constructor(...args: Sandwich[]) {
    if (!SandwichCatalog.instance) {
      this.list = args;
      SandwichCatalog.instance = true;
    }
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
