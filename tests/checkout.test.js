import Checkout from "../src/Checkout.js";

const checkout = new Checkout();

describe("Scanning:", () => {
    test("the cart initially has no items", () => {
        expect(Object.keys(checkout.cart).length).toBeCloseTo(0);
    });
    test("1.5lb of beef can be scanned into the cart", () => {
        checkout.scan("beef", 1.5);
        expect(Object.keys(checkout.cart).length).toBeCloseTo(1);
        expect(checkout.cart.beef).toBeCloseTo(1.5);
    });
    test("2 cans of soup can be scanned into the cart", () => {
        checkout.scan("soup");
        checkout.scan("soup");
        expect(Object.keys(checkout.cart).length).toBeCloseTo(2);
        expect(checkout.cart.soup).toBeCloseTo(2);
    });
    test("1 can of soup can be removed from the cart", () => {
        checkout.remove("soup");
        expect(Object.keys(checkout.cart).length).toBe(2);
        expect(checkout.cart.soup).toBeCloseTo(1);
    });
    test(".5 lb of beef can be removed from the cart", () => {
        checkout.remove("beef", 0.5);
        expect(Object.keys(checkout.cart).length).toBe(2);
        expect(checkout.cart.beef).toBeCloseTo(1);
    });
    test("beef is fully removed if we try to remove 5lb", () => {
        checkout.remove("beef", 5);
        expect(checkout.cart.beef).toBe(undefined);
    });
    test("no cans of soup is removed if we try to remove .5 cans", () => {
        checkout.remove("soup", 0.5);
        expect(checkout.cart.soup).toBeCloseTo(1);
    });
});
