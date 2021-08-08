// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    if (encode) {
      const chars = Array.from(input.toLowerCase())
      const encoded = chars.map(char => {
        let code = ""
        if (char === ' ') return char
        switch (char) {
          case 'a':
          case 'f':
          case 'l':
          case 'q':
          case 'v':
            code += "1"
            break
          case 'b':
          case 'g':
          case 'm':
          case 'r':
          case 'w':
            code += "2"
            break
          case 'c':
          case 'h':
          case 'n':
          case 's':
          case 'x':
            code += "3"
            break
          case 'd':
          case 'i':
          case 'j':
          case 'o':
          case 't':
          case 'y':
            code += "4"
            break 
          case 'e':
          case 'k':
          case 'p':
          case 'u':
          case 'z':
            code += "5"
            break
          default:
            break
        }

        char = char.charCodeAt(0)
        if (char < 97 || char > 122) return String.fromCharCode(char)
        if (char <= 101) code += "1"
        else if (char <= 107) code += "2"
        else if (char <= 112) code += "3"
        else if (char <= 117) code += "4"
        else if (char <= 122) code += "5"
        return code
      })
      return encoded.join('')
    } else {
     if (!input.length) return ""
     const words = input.split(' ')
     for (let word of words) {
      if (word.length % 2 === 1) return false
     }
     return words.map(word => decode(word)).join(' ')
    }

    function decode(series) {
      const letters = [
        ['a', 'b', 'c', 'd', 'e'], 
        ['f', 'g', 'h', '(i/j)', 'k'], 
        ['l', 'm', 'n', 'o', 'p'], 
        ['q', 'r', 's', 't', 'u'],
        ['v', 'w', 'x', 'y', 'z']
      ]

      let word = ""
      for (let i = 1; i < series.length; i += 2) {
        word += letters[series[i] - 1][series[i - 1] - 1]
      }
      return word
    }

  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
