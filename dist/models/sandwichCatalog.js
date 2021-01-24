"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SandwichCatalog = void 0;
class SandwichCatalog {
    constructor(sandwiches) {
        this.list = [];
        this.list = sandwiches;
    }
    static getInstance(...args) {
        if (this.instance)
            return this.instance;
        this.instance = new SandwichCatalog(args);
        return this.instance;
    }
    get getCatalog() {
        return this.list;
    }
    addSandwich(sandwich) {
        this.list.push(sandwich);
    }
    removeSandwich(name) {
        this.list = this.list.filter((sandwich) => {
            return sandwich.name !== name;
        });
    }
}
exports.SandwichCatalog = SandwichCatalog;
//# sourceMappingURL=sandwichCatalog.js.map