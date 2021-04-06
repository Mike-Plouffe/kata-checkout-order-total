import Store from "../src/Store.js";

const store = new Store();

describe("the cost of", () => {
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

describe("the cost with markdowns", () => {
    test("one can soup during a $.20 markdown period", () => {
        store.markdown("soup", .2);
        expect(store.itemsList.soup).toBeCloseTo(.2);
    });

    test("one can soup after the markdowns are over", () => {
        store.weeklyReset()
        expect(store.itemsList.soup).toBeCloseTo(1.89);
    });
});
