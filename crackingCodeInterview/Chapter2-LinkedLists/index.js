let LinkedList = require('./LinkedList');
/**
 * Remove Dups:
 * Write code to remove duplicates from an unsorted linked list
 *
 * QUESTIONS
 * =========
 *
 * APPROACHES
 * ==========
 * 1. Save the values and if they appear again remove the node
 */

function removeDupsSln1(list) {
  let values = {};
  let copy = new LinkedList();
  if(!list.root) { return copy; }
  let root = list.root;
  while(root) {
    if(values[root.val]) {
      root = root.next;
      continue;
    }
    values[root.val] = true;
    copy.addNode(root.val); // Was optimized to O(1) - time complexity
    root = root.next;
  }
  return copy;
}

/**
 * Kth to last:
 * Implement an algorithm to find the K-th to last element of a singly
 * linked list
 *
 * APPROACH
 * ========
 * 1. Make two loops, the first to find the size the second to find the K-th node
 *    - O(n) Time Complexity
 *    - O(n) space complexity
 */

function KtoLastNode(list, k) {
  let root = list.root;
  let i = 1;
  while(root) {
    root = root.next;
    i++;
  }
  let newRoot = list.root;
  let kth = i - k - 1;
  let j = 0;
  while(newRoot) {
    if(j == kth) { return newRoot };
    newRoot = newRoot.next;
    j++;
  }
  return null;
}

/**
 * Delete Middle Node:
 * Implement an algorithm to delete a node in the middle
 * given only access to that node
 *
 * APPROACH
 * ========
 * 1. Loop through the linked list looking for the node, then delete it
 *    - O(n) Time Complexity
 *    - O(n) Space Complexity
 */
function deleteMiddle(list, node) {
  if(!list.root) return null;
  let n = list.root;
  while(n.next) {
    if(n.next == node && n.next.next) {
      n.next = n.next.next;
    }
    n = n.next;
  }
}




module.exports = {
  removeDupsSln1,
  KtoLastNode,
  deleteMiddle
}