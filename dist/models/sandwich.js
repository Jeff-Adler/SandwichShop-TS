"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sandwich = exports.Sizes = exports.Condiments = exports.Toppings = exports.Cheeses = exports.Meats = exports.Breads = void 0;
var Breads;
(function (Breads) {
    Breads[Breads["WHITE"] = 0] = "WHITE";
    Breads[Breads["WHOLE_WHEAT"] = 1] = "WHOLE_WHEAT";
    Breads[Breads["WRAP"] = 2] = "WRAP";
})(Breads = exports.Breads || (exports.Breads = {}));
var Meats;
(function (Meats) {
    Meats["SALAMI"] = "salami";
    Meats["TURKEY"] = "turkey";
    Meats["ROAST_BEEF"] = "roast beef";
    Meats["HAM"] = "ham";
    Meats["PASTRAMI"] = "pastrami";
    Meats["CHICKEN"] = "chicken";
})(Meats = exports.Meats || (exports.Meats = {}));
var Cheeses;
(function (Cheeses) {
    Cheeses[Cheeses["PROVOLONE"] = 0] = "PROVOLONE";
    Cheeses[Cheeses["CHEDDAR"] = 1] = "CHEDDAR";
    Cheeses[Cheeses["PEPPER_JACK"] = 2] = "PEPPER_JACK";
    Cheeses[Cheeses["AMERICAN"] = 3] = "AMERICAN";
    Cheeses[Cheeses["SWISS"] = 4] = "SWISS";
    Cheeses[Cheeses["MOZZARELLA"] = 5] = "MOZZARELLA";
})(Cheeses = exports.Cheeses || (exports.Cheeses = {}));
var Toppings;
(function (Toppings) {
    Toppings[Toppings["LETTUCE"] = 0] = "LETTUCE";
    Toppings[Toppings["TOMATO"] = 1] = "TOMATO";
    Toppings[Toppings["ONION"] = 2] = "ONION";
    Toppings[Toppings["PEPPERS"] = 3] = "PEPPERS";
})(Toppings = exports.Toppings || (exports.Toppings = {}));
var Condiments;
(function (Condiments) {
    Condiments[Condiments["OIL_VINEGAR"] = 0] = "OIL_VINEGAR";
    Condiments[Condiments["MAYO"] = 1] = "MAYO";
    Condiments[Condiments["MUSTARD"] = 2] = "MUSTARD";
})(Condiments = exports.Condiments || (exports.Condiments = {}));
var Sizes;
(function (Sizes) {
    Sizes[Sizes["WHOLE"] = 0] = "WHOLE";
    Sizes[Sizes["HALF"] = 1] = "HALF";
})(Sizes = exports.Sizes || (exports.Sizes = {}));
class Sandwich {
    constructor(name, bread, meats, cheeses, toppings, condiments, size, price, breadOut = false, vegetarian = false, vegan = false) {
        this.name = name;
        this.bread = bread;
        this.meats = meats;
        this.cheeses = cheeses;
        this.toppings = toppings;
        this.condiments = condiments;
        this.size = size;
        this.price = price;
        this.breadOut = breadOut;
        this.vegetarian = vegetarian;
        this.vegan = vegan;
    }
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
    getIterableItem(items) {
        return items.map((item) => {
            return console.log(item);
        });
    }
}
exports.Sandwich = Sandwich;
//# sourceMappingURL=sandwich.js.map