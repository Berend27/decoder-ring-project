const expect = require("chai").expect
const { substitution } = require("../src/substitution")

describe("substitution", () => {
    it("should encode a given word with the substituion method given an alphabet", () => {
        const message = "thinkful"
        const alphabet = "xoyqmcgrukswaflnthdjpzibev"
        const actual = substitution(message, alphabet)
        const expected = "jrufscpw"
        expect(actual).to.equal(expected)
    })
    it("should encode a phrase with spaces using the substitution method with a given alphabet", () => {
        const message = "You are an excellent spy"
        const alphabet = "xoyqmcgrukswaflnthdjpzibev"
        const actual = substitution(message, alphabet)
        const expected = "elp xhm xf mbymwwmfj dne"
        expect(actual).to.equal(expected)
    })
    it("should be able to handle special characters in the input and the alphabet", () => {
        const message = "Hi!"
        const alphabet = "xoyqmcgr&kswaflnthdjpzibev"
        const actual = substitution(message, alphabet)
        const expected = "r&!"
        expect(actual).to.equal(expected)
    })
    it("should return false if the given alphabet isn't exactly 26 character long", () => {
        const message = "message"
        const shortAlphabet = "abc"
        const actual = substitution(message, shortAlphabet)
        expect(actual).to.false
    })
    it("should return false if not all of the characters in the given alphabet are unique", () => {
        const message = "message"
        const repeatAlphabet = "aacdefghijklmnopqrstuvwxyz"
        const actual = substitution(message, repeatAlphabet)
        expect(actual).to.false
    })
    it("correctly decodes the given phrase, based on the alphabet given to the function", () => {
        const message = "y&ii$r&"
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl"
        const actual = substitution(message, alphabet, false)
        const expected = "message"
        expect(actual).to.equal(expected)
    })
    it("maintains spaces in the message before and after decoding", () => {
        const message = "elp xhm xf mbymwwmfj dne"
        const alphabet = "xoyqmcgrukswaflnthdjpzibev"
        const actual = substitution(message, alphabet, false)
        const expected = "you are an excellent spy"
        expect(actual).to.equal(expected)
    })
    it("should return false if the substitution alphabet is missing", () => {
        const message = "Thinkful"
        const actual = substitution(message)
        expect(actual).to.false
    })
})