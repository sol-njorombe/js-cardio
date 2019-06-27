/**
 * Is Unique:
 * Implement an algorithm to determine if a string has all unique characters.
 * What if we cannot use additional data structures
 *
 * QUESTIONS
 * =========
 * 1. Are the uppercase vs lower case considered different?
 *    - change all to lowercase
 * 2. Do we consider spaces and other special characters?
 *    - remove them
 *
 * APPROACHES
 * ==========
 * 1. use a hash table
 *    - Time complexity O(n)
 *    - Space complexity O(1)
 * 2. sort the array, compare with subsequent characters
 *    - Time complexity O(n + n log n)
 *    - Space complexity O(n)
 */
function isUniqueSln1(str) {
  const hash = {};
  for(let char of str){
    if(hash[char])
      return false;

    hash[char] = 1;
  }
  return true;
}

function isUniqueSln2(str) {
  let strArr = str.split('').sort();
  for(let i = 0; i < (strArr.length - 1); i++) {
    if(strArr[i] == strArr[i+1]) { return false; }
  }
  return true;
}

/**
 * Check Permutation:
 * Given two strings, write a method to decide if one is a permutation of the other
 *
 * QUESTIONS
 * =========
 * 1. Does character case matter?
 *
 * APPROACHES
 * ==========
 * 1. Make a hash increment in first loop, decrement for second string check the final result for characters left
 *    - Time Complexity O(n)
 *    - Space Complexity O(1)
 * 2. Sort the two strings compare the two
 *    - Time Complexity O(n log n)
 *    - Space Complexity O(n)
 *
 * OPTIMIZATIONS
 * =============
 * return false of the length doesnt match
 */

function isPermutationSln1(str, testStr) {
  if(str.length !== testStr.length) { return false };
  let hash = {};
  for(let char of str.toLowerCase()) {
    hash[char] = hash[char] ? hash[char] + 1 : 1;
  }
  for(let char of testStr.toLowerCase()) {
    if(!hash[char]) return false;
    hash[char] -= 1;
  }
  for(let char of Object.keys(hash)) {
    if(hash[char] !== 0) { return false; }
  }
  return true;
}

function isPermutationSln2(str, testStr) {
  if(str.length !== testStr.length) { return false };
  const strSorted = str.split('').sort().join('');
  const testStrSorted = testStr.split('').sort().join('');
  return strSorted == testStrSorted;
}

/**
 * URLify:
 * Write a method to replace all spaces in a string with '%20'. You may assume that the string
 * has sufficient space at the end to hold the additional characters and that you are guven the
 * true length of the string
 *
 * QUESTIONS AND CONSIDERATIONS
 * ============================
 * 1. Some languages like java, Go, the array is of a fixed length, thus the consideration of the given array size
 *
 * APPROACHES
 * ==========
 * 1. Move characters towards the end the character string
 *    - Time complexity O(n)
 *    - Space complexity O(n)
 * 2. Split the array into words then join with '%20'
 *    - Time complexity O(n)
 *    - Space complexity O(n)
 * 3. regex replace
 *
 */

function URLifySln1(str) {
  let arr = str.split('');
  let startURL = false;
  let writeIndex = arr.length - 1;
  for(let i = writeIndex; i >= 0; i--) {
    if(arr[i] === " " && !startURL){
      continue;
    }
    if(arr[i] !== " ") {
      startURL = true;
      arr[writeIndex] = arr[i];
      writeIndex = writeIndex - 1
      continue;
    }
    if(arr[i] === " ") {
      arr[writeIndex] = '0';
      arr[writeIndex - 1] = '2';
      arr[writeIndex - 2] = '%';
      writeIndex = writeIndex - 3;
      continue;
    }
  }
  return arr.join('');
}

function URLifySln2(str) {
  return str.trim().split(' ').join('%20');
}

function URLifySln3(str) {
  return str.trim().replace(/[ ]+/g, '%20');
}

/**
 * One Away:
 * There are three types of edits that can be performed on strings:
 * insert a character, remove a character, or replace a character.
 * Given two strings, write a function to check if the are one edit away
 *
 * APPROACHES
 * ==========
 * 1. Check if it is an insert/remove. Then use a hash and on str1, fill the hash
 *    on str2, delete keys from the hash if they exist. Store additional characters of string
 *    2 in an temp array. By the end, the hash should have at most 1 character and the temp
 *    array should have at most 1 character.
 *    - Time complexity O(m + n) sum of length of the two strings
 *    - Space complexity O(c + n) => O(n) c is constant for the hash. It can only accomodate
 *      as many characters as there are, n is the length of characters in str2 not in str1
 */
function oneAway(str1, str2) {
  let isInsertDel = Math.abs(str1.length - str2.length) === 1;
  let hash = {};
  let tempStore = [];
  for(let char of str1)
    hash[char] = hash[char] ? hash[char] + 1 : 1;

  for(let char of str2) {
    if(hash[char] === 1)
        delete(hash[char]);
    else if (hash[char] > 1)
        hash[char]--;
    else
      tempStore.push(char);
  }

  let hashLength = Object.keys(hash).length;
  if(isInsertDel) {
    return (hashLength === 1 && tempStore.length === 0) || (hashLength === 0 && tempStore.length === 1);
  }
  return (hashLength === 1 && tempStore.length === 1)
}

/**
 * stringCompression
 * Implement a method to perform basic string compression using the counts
 * of repeated characters. If the "compressing" string is longer than the original
 * return the original string.
 * Assumption the string onlty has lower and upper case (a - z)
 *
 * APPROACH
 * ========
 * 1. On each index compare character to last seen character, if similar increment counter
 *    otherwise, append character and count to result string, initialize the last seen with the new character
 *    and set the counter to 1
 *    - Time complexity O(n)
 *    - Space complexity O(n) length of result closely resembles the str input
 */
function stringCompression(str) {
  let lastSeen = '';
  let counter = '';
  let result = "";
  for(let i = 0; i < str.length; i++) {
    if(str[i] === lastSeen) {
      counter++;
    }else{
      result = result + lastSeen + counter;
      counter = 1;
      lastSeen = str[i];
    }
    if(i === (str.length - 1)) result = result + lastSeen + counter;
  }

  if(str.length <= result.length) return str;
  return result;
}


/**
 * rotateMatrix
 * Given an image representation by an N x N matrix, where each pixel in
 * the image is represented by an integer, write a method to rotate the image
 * by 90 degrees.
 * You can do this in place
 *
 * APPROACHES
 * ==========
 * 1. Loop through each row, as you fetch values from the row, prepend the values to each
 *    row. After all rows are filled, slice out the older values.
 *    - Time complexity O(n x n) n is sized of the matrix
 *    - Space complexity O(n) as the values as copied over O(2n) that resolves to O(n)
 */
function rotateMatrix(arr) {
  for(let row = 0; row < arr.length; row++) {
    for(let j = arr.length; j > 0; j--) {
      let val = arr[row][arr[row].length - j];
      arr[arr.length - j].unshift(val);
    }
  }

  arr.map(row => row.splice(arr.length, arr.length));
  return arr;
}

/**
 * zeroMatrix
 * Write an algorithm such that if an element is an M x N matrix is 0, its entire
 * row and column are set to 0
 *
 * APPROACH
 * ========
 * 1. Traverse the array and collect all the rows with zeros and all the columns with zeros
 *    Then start by converting the values in the rows to zeros, then for the rows not touched
 *    but still have columns with zeros, convert the column values to zeros
 *    - Time complexity O(n x m) n and m are the dimensions of the array
 *    - Space complexity O(n + m) The hashes can only store a maximum of the number of cols and rows
 */
function zeroMatrix(arr) {
  let zeroRows = {};
  let zeroCols = {};
  let allRows = {};
  for(let row = 0; row < arr.length; row++) {
    allRows[row] = true;
    for(let col = 0; col < arr[row].length; col++) {
      if(arr[row][col] === 0) {
        zeroRows[row] = true;
        zeroCols[col] = true;
      }
    }
  }

  for(let row of Object.keys(zeroRows)) {
    delete(allRows[row]);
    for(let i = 0; i < arr[row].length; i++) {
      arr[row][i] = 0;
    }
  }

  for(let col of Object.keys(zeroCols)) {
    for(let row of Object.keys(allRows)) {
      arr[row][col] = 0;
    }
  }

  return arr;
}

/**
 * stringRotation
 * Assume you have a method isSubstring which checks if one string is a substring of another
 * Given two strings s1 and s2 write code to check if s2 is a rotation of s1 using only
 * one call to isSubstring
 *
 * APPROACH
 * ========
 * 1. Find the possible beginning of the the second string in reference to the first string
 *    then reorganize the second string to start from the possible begining and test whether
 *    the resulting string is a substring
 *    - Time complexity O(n). We are iterating ove s2
 *    - Space complexity O(n). The substr will be a copy of s2
 */
function stringRotation(s1, s2) {
  for(let i = 0; i < s2.length; i++) {
    if(s2[i] === s1[0] && s2.slice(i, s2.length) === s1.slice(0, (s2.length - i))) {
      let substr = s2.slice(i, s2.length) + s2.slice(0, i);
      return isSubstring(s1, substr);
    }
  }
  return false;
}

function isSubstring(s1, s2) {
  let regex = RegExp(s2);
  return regex.test(s1);
}

module.exports = {
  isUniqueSln1,
  isUniqueSln2,
  isPermutationSln1,
  isPermutationSln2,
  URLifySln1,
  URLifySln2,
  URLifySln3,
  oneAway,
  stringCompression,
  rotateMatrix,
  zeroMatrix,
  stringRotation,
  isSubstring
}