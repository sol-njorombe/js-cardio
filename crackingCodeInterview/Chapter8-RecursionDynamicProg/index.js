/**
 * Triple Step
 * A child is running up a staircase with n steps and can hop either 1 step,
 * 2 Steps or 3 steps at a time. Implement a method to count how many possible
 * ways the child can run up the stairs
 */
function tripleStep(n, mem = { 1: 1, 2: 2, 3: 3 }) {
  if(n < 1) return 0;
  mem[n - 1] = mem[n - 1] || tripleStep(n - 1, mem);
  mem[n - 2] = mem[n - 2] || tripleStep(n - 2, mem);
  mem[n - 3] = mem[n - 3] || tripleStep(n - 3, mem);
  return mem[n - 1] + mem[n - 2] + mem[n - 3];
}

/**
 * Robot in a Grid
 * Imagine a robot sitting on the upper corner of a grid with r rows and c columns.
 * The robot can only move in two directions, right and down but certain cells are
 * "off limits" such that the robot cannot step in them. Design an algorithm to find
 * a path for the robot from the top left to the bottom right.
 */

/**
 * Magic Index:
 * A magic index in an array A[ 0...n-1 ] is defined to be an index such that A[i] = i.
 * Given a sorted array of distinct integers, write a method to find a magic index,
 * if one exists in array.
 *
 * FOLLOW UP
 * What if the values are not distinct?
 */


/**
 * Power Set:
 * Write a function to return all subsets of a set.
 */
function powerSet(arr) {
  if(arr.length == 1) return [new Set([]), new Set(arr)];
  let last = arr.splice(-1);
  let prev = powerSet(arr);
  return prev.concat(prev.map(s => new Set([...s, ...last])));
}

/**
 * Recursive Multiply
 * Write a recursive function to multiply two positive integers without using the * operator
 * You can use addition, subtraction, and bit shifting, but you should minimize the number of
 * those operations.
 */
function recursiveMultiply(x, y) {
  if(x === 1) return y;
  if(y === 1) return x;
  if(x < y) return recursiveMultiply(x - 1, y) + y;
  else return recursiveMultiply(x, y - 1) + x;
}


module.exports = {
  tripleStep,
  powerSet,
  recursiveMultiply
};