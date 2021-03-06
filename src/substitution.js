// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    const firstAlphabet = "abcdefghijklmnopqrstuvwxyz"
    if (!alphabet || typeof alphabet != "string") return false
    if (alphabet.length !== 26) return false
    if (!checkAlphabet(alphabet)) return false

    input = input.toLowerCase()
    const words = input.split(' ')
    if (encode) {
      return words.map(word => encodeThis(word, alphabet)).join(' ')
    } else { // decode
      return words.map(word => decodeThis(word, alphabet)).join(' ')
    }

    function checkAlphabet(alphabet) {
      let areUnique = true
      const uniqueLetters = []
      Array.from(alphabet).forEach(letter => {
      if (uniqueLetters.includes(letter)) areUnique = false
      uniqueLetters.push(letter)
      })
      return areUnique
    }

    function encodeThis(word, alphabet) {
      const letters = Array.from(word)
      return letters.reduce((encoded, letter) => {
        if (firstAlphabet.includes(letter)) {
          const index = firstAlphabet.indexOf(letter)
          encoded += alphabet.charAt(index)
        } else {
          // keep special characters the same
          encoded += letter
        }
        return encoded
      }, "")
    }

    function decodeThis(word, alphabet) {
      const letters = Array.from(word)
      return letters.reduce((decoded, letter) => {
        // special characters are translated if they are in the given alphabet
        if (alphabet.includes(letter)) {
          const index = alphabet.indexOf(letter)
          decoded += firstAlphabet.charAt(index)
        } else {
          decoded += letter
        }
        return decoded
      }, "")
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
