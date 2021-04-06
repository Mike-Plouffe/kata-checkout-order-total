class Store {
    constructor() {
        this.itemsList = {};

        this.weeklyReset();
    }

    weeklyReset() {
        this.setItem("soup", 1.89);
        this.setItem("beef", 5.99);
        this.setItem("banana", 2.38);
    }

    setItem(item, price) {
        this.itemsList[item] = price;
    }
}
export default Store;
