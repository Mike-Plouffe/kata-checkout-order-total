class Store {
    constructor() {
        this.weeklyReset();
    }

    weeklyReset() {
        this.itemsList = {};
        this.itemsByWeight = new Set();
        this.buyNGetMAtXOff = {};
        this.buyNForX = {};
        this.specialExistsForItem = new Set();
        this.setItem("soup", 1.89);
        this.setItem("beef", 5.99, true);
        this.setItem("banana", 2.38, true);
    }

    setItem(item, price, byWeight = false) {
        this.itemsList[item] = price;
        if (byWeight) {
            this.itemsByWeight.add(item);
        } else {
            this.itemsByWeight.delete(item);
        }
    }

    createBuyNGetMAtXOff(item, N, M, X, limit = 99999) {
        if (this.specialExistsForItem.has(item)) {
            return false;
        }
        this.buyNGetMAtXOff[item] = [N, M, X, limit];
        this.specialExistsForItem.add(item);
        return true;
    }

    createBuyNForX(item, N, X, limit = 99999) {
        if (this.specialExistsForItem.has(item)) {
            return false;
        }
        this.buyNForX[item] = [N, X, limit];
        this.specialExistsForItem.add(item);
        return true;
    }
}

export default Store;
