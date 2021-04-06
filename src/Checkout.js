import Store from "./Store.js";

class Checkout {
    constructor() {
        this.store = new Store();
        this.newCart();
    }

    newCart() {
        this.cart = {};
    }

    scan(item, units = 1) {
        const current = this.cart[item];
        if (current) {
            this.cart[item] = current + units;
        } else {
            this.cart[item] = units;
        }
    }

    remove(item, units = 1) {
        const current = this.cart[item];
        let newunits = 0;
        if (!this.store.itemsByWeight.has(item)) {
            newunits = current - Math.floor(units);
        } else {
            newunits = current - units;
        }
        if (newunits > 0) {
            this.cart[item] = newunits;
        } else {
            delete this.cart[item];
        }
    }
}

export default Checkout;
