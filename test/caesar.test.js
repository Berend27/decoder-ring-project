const expect = require("chai").expect
const { caesar } = require("../src/caesar")

describe("caesar", () => {
    it("should encode a message by shifting the letters a specified amount", () => {
       const actual = caesar("thinkful", 3, true)
       const expected = 'wklqnixo'
       expect(actual).to.equal(expected)
    })
    it("should encode a message by shifting the letters a specified amount, despite leaving out the third argument", () => {
        const actual = caesar("thinkful", 3)
        const expected = 'wklqnixo'
        expect(actual).to.equal(expected)
     })
    it("should decode a message by unshifting the letters a specified amount", () => {
        const actual = caesar("wklqnixo", 3, false)
        const expected = "thinkful"
        expect(actual).to.equal(expected)
    })
})