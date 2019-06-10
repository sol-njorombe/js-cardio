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
    if(hash[char]) {
      return false;
    }
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

module.exports = {
  isUniqueSln1,
  isUniqueSln2,
  isPermutationSln1,
  isPermutationSln2,
  URLifySln1,
  URLifySln2,
  URLifySln3
}