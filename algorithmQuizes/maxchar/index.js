// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let countMap = {};
  let maxChar = str[0];
  let maxCounter = 0;

  str.split("").forEach(char => {
    if (countMap[char]) countMap[char]++;
    else countMap[char] = 1;

    if (countMap[char] > maxCounter) {
      maxChar = char;
      maxCounter = countMap[char];
    }
  });

  return maxChar;
}

module.exports = maxChar;
