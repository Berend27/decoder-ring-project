// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // shifts or unshifts the letters in the given phrase by the specified amount
  function caesar(input, shift, encode = true) {
    if (!shift || shift < -25 || shift > 25) return false
    input = input.toLowerCase()
    const chars = [...input]
    const shifted = chars.map(char => {
      char = char.charCodeAt(0)
      if (char >= 97 && char <= 122) {
        if (encode) char += shift
        else  char -= shift
        // wrap if the shift exceeds either end of the alphabet
        if (char > 122) char -= 26
        if (char < 97) char += 26
      }
      return String.fromCharCode(char)
    })
    return shifted.join("")
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
