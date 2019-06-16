// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let result = [];
  let rowSize = (n * 2) - 1;
  for(let i = 1; i <= n; i++) {
    let row = "";
    let markLimit = n - i;
    for(let j = 0; j < rowSize; j++) {
      if(j < markLimit || j >= (rowSize - markLimit)) {
        row = row + ' ';
      } else {
        row = row + '#';
      }
    }
    console.log(row);
  }
}

module.exports = pyramid;
