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
        if (!this.store.itemsList[item]) {
            return false;
        }
        const current = this.cart[item];
        if (current) {
            this.cart[item] = current + units;
        } else {
            this.cart[item] = units;
        }
        return true;
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

    cartCost() {
        let total = 0;
        Object.entries(this.cart).forEach(([item, units]) => {
            total += this.store.itemsList[item] * units;
        });
        return total;
    }
}

export default Checkout;
