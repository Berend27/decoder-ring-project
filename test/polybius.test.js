const expect = require("chai").expect
const { polybius } = require("../src/polybius")

describe("polybius", () => {
    it("should encode a word using a polybius square", () => {
        const message = "thinkful"
        const actual = polybius(message)
        const expected = "4432423352125413"
        expect(actual).to.equal(expected)
    })
    it("should encode a message that has a space using a polybius square", () => {
        const message = "Hello world"
        const actual = polybius(message)
        const expected = '3251131343 2543241341'
        expect(actual).to.equal(expected)
    })
})