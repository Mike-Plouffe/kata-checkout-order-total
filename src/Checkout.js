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
        const fixedunits = this.editUnitsValueByWeighted(item, units);
        const current = this.cart[item];
        if (current) {
            this.cart[item] = current + fixedunits;
        } else {
            this.cart[item] = fixedunits;
        }
        return true;
    }

    remove(item, units = 1) {
        const current = this.cart[item];
        const fixedunits = this.editUnitsValueByWeighted(item, units);
        let newunits = 0;
        newunits = current - fixedunits;
        if (newunits > 0) {
            this.cart[item] = newunits;
        } else {
            delete this.cart[item];
        }
    }

    editUnitsValueByWeighted(item, units) {
        let newunits = null;
        if (!this.store.itemsByWeight.has(item)) {
            newunits = Math.floor(units);
        } else {
            newunits = units;
        }
        return newunits;
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
