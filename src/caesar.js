// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    const chars = [...input]
    const shifted = chars.map(char => {
      char = char.charCodeAt(0)
      if (encode) char += shift
      else  char -= shift
      return String.fromCharCode(char)
    })
    return shifted.join("")
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
