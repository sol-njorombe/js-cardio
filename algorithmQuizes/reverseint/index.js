// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const sign = Math.sign(n);
  return Number(n
    .toString()
    .replace(/[^a-zA-Z0-9]/g, "")
    .split("")
    .reduce((prev, char) => char + prev)) * sign;
}

module.exports = reverseInt;
