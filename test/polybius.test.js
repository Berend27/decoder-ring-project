const expect = require("chai").expect
const { polybius } = require("../src/polybius")

describe("polybius", () => {
    it("translates the letters i and j to 42 when encoding", () => {
        const message = "i j"
        const actual = polybius(message)
        const expected = "42 42"
        expect(actual).to.equal(expected)
    })
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
    it("should treat capital letters as lowercase letters when encoding", () => {
        const message = "Thinkful"
        const actual = polybius(message)
        const expected = "4432423352125413"
        expect(actual).to.equal(expected)
    })
    it("should decode a word using a polybius square", () => {
        const message = "4432423352125413"
        const actual = polybius(message, false)
        const expected = "th(i/j)nkful"
        expect(actual).to.equal(expected)
    })
    it("maintains spaces in the message when decoding", () => {
        const message = "3251131343 2543241341"
        const actual = polybius(message, false)
        const expected = "hello world"
        expect(actual).to.equal(expected)
    })
    it("should return false if decoding a word with an odd number of numbers", () => {
        const threeNumbers = "123"
        const actual = polybius(threeNumbers, false)
        expect(actual).to.false
    })
})