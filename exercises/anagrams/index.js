// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const charMap1 = charMapBuilder(stringA);
    const charMap2 = charMapBuilder(stringB);

    if(Object.keys(charMap1).length !== Object.keys(charMap2).length){
        return false
    }

    for (let char in charMap1) {
        if (charMap1[char] !== charMap2[char]) {
            return false;
        }
        return true;
    }
}

const charMapBuilder = (string) => {
    let charMap = {};
    for (let char of string.replace(/[^\w]/g, '').toLowerCase()) {
      if(charMap[char]){
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    }
    return charMap
  }

module.exports = anagrams;


// word.replace(/[^\w]/g, "").toLowerCase();
