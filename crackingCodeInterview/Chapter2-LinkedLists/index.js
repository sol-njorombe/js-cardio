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
 *    - O(n) time complexity
 *    - O(n) space complexity, but required 2 - 3n space
 * 2. maintain a hash to check seen values and a pointer to the last unique.
 *    - O(n) time complexity
 *    - O(1) space complaxity (Only fixed amt of possible hash keys, and one pointer for last unique)
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

function removeDupsSln2(list) {
  if(!list.root) return list;
  let values = {};
  values[list.root.val] = true;
  let node = list.root.next;
  let lastUnique = list.root;
  while(node) {
    if(!values[node.val]){
      values[node.val] = true;
      lastUnique.next = node;
      lastUnique = node;
    }
    node = node.next;
  }

  lastUnique.next = null;
  return list;
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
 * 2. Make two pointers for lead and tail. The lead will go forward by k steps then keep moving both the lead
 *    and tails in same pace. When lead gets to the end we return the tail
 *    - O(n) time complexity
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

function KtoLastNodeSln2(list, k) {
  let lead = list.root;
  let tail = list.root;
  for(let i = 0; i < k; i++) {
    if(!lead) return null;
    lead = lead.next
  }

  while(lead && tail) {
    lead = lead.next;
    tail = tail.next;
  }
  return tail;
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

/**
 * Partition:
 * Write code to partition a linked list around a value x such that all nodes
 * less than x come before all nodes greater or equal to x
 */


/**
 * sum list
 * You have two numbers represented by a linked list, where each node contains a single
 * digit the digits are stored in reverse order, such that the 1's digit is at the head
 * of the list. Write a function to add the two numbers and return the sum as a linked list
 *
 * EXAMPLE 1
 * Input (7 -> 1 -> 6) + (5 -> 9 -> 2) ie 617 + 295
 * Output (2 -> 1 -> 9) ie 912
 *
 */


/**
 * Palindrome
 * Implement a function to check whether a linked list makes a palindrome
 */

/**
 * Intersection
 * Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node
 * Note the intersection is defined by reference not value
 */

/**
 * Loop Detection
 * Given a linked list which might contain a loop, implement an algorithm that returns the node beginning
 * of the loop(if one exists)
 */



module.exports = {
  removeDupsSln1,
  removeDupsSln2,
  KtoLastNode,
  KtoLastNodeSln2,
  deleteMiddle,
}