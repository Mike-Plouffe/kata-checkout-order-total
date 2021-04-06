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
            const buyNGetMAtXOff = this.store.buyNGetMAtXOff[item];
            const buyNForX = this.store.buyNForX[item];
            const cost = this.store.itemsList[item];
            let currentUnits = units;
            let currrentDiscountedItems = 0;
            if (buyNGetMAtXOff) {
                const N = buyNGetMAtXOff[0];
                const M = buyNGetMAtXOff[1];
                const X = buyNGetMAtXOff[2];
                const limit = buyNGetMAtXOff[3];
                while (currentUnits > 0) {
                    if (
                        currrentDiscountedItems < limit &&
                        currentUnits >= N + M
                    ) {
                        total += N * cost;
                        total += M * cost * (1 - X);
                        currrentDiscountedItems += 1;
                        currentUnits -= N + M;
                    } else {
                        total += cost * currentUnits;
                        currentUnits = 0;
                    }
                }
            } else if (buyNForX) {
                const N = buyNForX[0];
                const X = buyNForX[1];
                const limit = buyNForX[2];
                let discountedUnits = Math.floor(currentUnits / N);
                discountedUnits =
                    discountedUnits > limit ? limit : discountedUnits;
                total += discountedUnits * X;
                total += (currentUnits - discountedUnits) * cost;
            } else {
                total += cost * units;
            }
        });
        return total;
    }
}

export default Checkout;
