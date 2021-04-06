class Store {
    constructor() {
        this.itemsList = {};

        this.addItem("soup", 1.89);
        this.addItem("beef", 5.99);
        this.addItem("banana", 2.38);
    }

    addItem(item, price) {
        this.itemsList[item] = price;
    }
}
export default Store;
