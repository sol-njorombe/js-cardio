// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const strArr = str.split('');
  const length = strArr.length;
  for(let i = 0; i < Math.ceil(length / 2); i++){
    if(strArr[i] != strArr[length - 1 - i]) return false;
  }

  return true;
}

module.exports = palindrome;
