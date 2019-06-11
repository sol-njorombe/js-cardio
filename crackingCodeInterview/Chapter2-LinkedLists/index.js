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

module.exports = {
  removeDupsSln1,
  KtoLastNode
}