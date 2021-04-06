class Store {
    constructor() {
        this.weeklyReset();
    }

    weeklyReset() {
        this.itemsList = {};
        this.itemsByWeight = new Set();
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
}
export default Store;
