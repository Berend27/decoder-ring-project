const expect = require("chai").expect
const { caesar } = require("../src/caesar")

describe("caesar", () => {
    it("should encode a message by shifting the letters a specified amount", () => {
       const actual = caesar("thinkful", 3, true)
       const expected = 'wklqnixo'
       expect(actual).to.equal(expected)
    })
    it("ignores capital letters, treating them as lowercase", () => {
        const actual = caesar("Thinkful", 3, true)
        const expected = 'wklqnixo'
        expect(actual).to.equal(expected)
     })
    it("handles shifts that go past the end of the alphabet when encoding", () => {
        const actual = caesar("z", 3)
        const expected = "c"
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
    it("should return false if missing an argument for shift", () => {
        const actual = caesar("thinkful")
        const expected = false
        expect(actual).to.equal(expected)
    })
    it("should return false if the argument for shift is greater than 25", () => {
        const actual = caesar("thinkful", 26)
        const expected = false
        expect(actual).to.equal(expected)
    })
    it("should return false if the argument for shift is less than 25", () => {
        const actual = caesar("thinkful", -26)
        const expected = false
        expect(actual).to.equal(expected)
    })
    it("should return false if the argument for shift is 0", () => {
        const actual = caesar("thinkful", 0, false)
        const expected = false
        expect(actual).to.equal(expected)
    })
    it("should encode a message with spaces and punctuation, encoding in lowercase", () => {
        const message = "This is a secret message!"
        const actual = caesar(message, 8)
        const expected = 'bpqa qa i amkzmb umaaiom!'
        expect(actual).to.equal(expected)
    })
    it("should decode a message with spaces and punctuation", () => {
        const message = 'bpqa qa i amkzmb umaaiom!'
        const actual = caesar(message, 8, false)
        const expected = "this is a secret message!"
        expect(actual).to.equal(expected)
    })
})