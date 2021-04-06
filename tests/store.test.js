import Store from '../src/Store.js'

describe('the cost of', () => {
    test('one can of soup is $1.89', () => {
        expect(Store.itemsList.soup).toBeCloseTo(1.89)
    })

    test('one lb of ground beef is $5.99', () => {
        expect(Store.itemsList.beef).toBeCloseTo(5.99)
    })

    test('one lb of bananas is $2.38', () => {
        expect(Store.itemsList.banana).toBeCloseTo(1.69)
    })
})