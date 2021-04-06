import Store from "../src/Store.js";

describe("the cost of", () => {
    const store = new Store();

    test("one can of soup is $1.89", () => {
        expect(store.itemsList.soup).toBeCloseTo(1.89);
    });

    test("one lb of ground beef is $5.99", () => {
        expect(store.itemsList.beef).toBeCloseTo(5.99);
    });

    test("one lb of bananas is $2.38", () => {
        expect(store.itemsList.banana).toBeCloseTo(2.38);
    });
});
