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
        store.setItem("soup", 0.2);
        expect(store.itemsList.soup).toBeCloseTo(0.2);
    });

    test("one can soup after the markdowns are over", () => {
        store.weeklyReset();
        expect(store.itemsList.soup).toBeCloseTo(1.89);
    });
});

describe('adding specials', () => {
    test('adding a Buy N get M at X% off', () => {
        store.createBuyNGetMAtXOff('soup', 1, 1, 100, 2)
        expect(store.buyNGetMAtXOff.soup).toBe([1, 1, 100, 2])
    })
    test('adding a Buy N for X', () => {
        store.createBuyNGorX('soup', 3, 5, 1)
        expect(store.buyNForX.soup).toBe([3, 5, 1])
    })
    test('adding a Buy N get M for X% off for weighted items', () => {
        store.createBuyNGetMAtXOff('beef', 2, 1, 50, 1)
        expect(store.buyNGetMAtXOff.beef).toBe([2, 1, 50, 1])
    })
})
