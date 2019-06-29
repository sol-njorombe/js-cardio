
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
 * EXAMPLE
 * Input (3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1) [partition = 5]
 * Output (3 -> 2 -> 1)  ->  (5 -> 8 -> 5 -> 10)
 *
 * APPROACH
 * ========
 * 1. Loop from the first to the last node. If the node is greater than the value,
 *    remove it and push it to the end of the list.
 *    - Time Complexity O(n) We only loop through the end of the list once
 *    - Space complexity O(1) we only need to maintain fixed items to track the current positions
 */
function partition(list, value) {
  if(!list.root || !list.root.next) return list;
  let originalHead = list.root;
  let node = list.root;
  let originalTail = list.tail;
  let tailPointer = list.tail;
  let parent = null;

  while(node) {
    if(node === originalTail)
      break;

    if(node.val >= value) {
      let current = node;
      if(node === originalHead) {
        list.root = current.next;
        node = current.next;
        current.next = null;
      } else {
        if(parent) {
          parent.next = current.next;
          node = current.next;
          current.next = null;
        }else{
          throw('The loop may never end');
        }
      }
      tailPointer.next = current;
      list.tail = current;
      tailPointer = current;
    }else {
      parent = node;
      node = node.next;
    }
  }

  return list;
}


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
 * APPROACH
 * ========
 * 1. Create a new list and incrementally add nodes/values. To get the value of the node
 *    add the values of nodes in same index from list1, and list2 and any carry over from the previous
 *    addition
 *    - Time complexity O(n) for which n represent the longer of the two lists
 *    - Space complexity O(n) the sum has to be at least as long as the longer of the two lists
 *
 */
function sumOfList(list1, list2) {
  let carryOver = 0;
  let result = new LinkedList();
  let l1 = list1.root;
  let l2 = list2.root;
  while(l1 || l2) {
    let l1Num = l1 ? l1.val : 0;
    let l2Num = l2 ? l2.val : 0;
    let sum = l1Num + l2Num + carryOver;
    carryOver = Math.floor(sum / 10);
    result.addNode(sum % 10);
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return result;
}


/**
 * Palindrome
 * Implement a function to check whether a linked list makes a palindrome
 *
 * APPROACH
 * ========
 * 1. User the stack properties of an array. Given the list make two pointers:
 *    fast pointers that advances two steps every time, slow pointer that advances
 *    one step every time. The slow pointer should push the value in every step it
 *    advances. When the faster pointer reaches the end, advance the slower pointer to the
 *    second half of the string and pop a value if the value is equvalent to that of the
 *    new node. If an value of a new node is node equal to the popped value, it is not a
 *    a palindrome return false. If by the end the array is not empty return false.
 *    Otherwise return true.
 *    - Time complexity O(n) we traverse the linked list once
 *    - Space complexity O(n) we store half the characters of the linked list
 */
function palindrome(list) {
  if(!list.root || !list.root.next) return true;
  let fast = list.root;
  let slow = list.root;
  let seenValues = [];
  while(slow && fast.next && fast.next.next) {
    seenValues.push(slow.val);
    slow = slow.next;
    fast = fast.next.next;
  }

  slow = slow.next;

  while(slow) {
    if(seenValues[seenValues.length - 1] !== slow.val) {
      return false;
    }
    seenValues.pop();
    slow = slow.next;
  }

  return seenValues.length === 0;
}

/**
 * Intersection
 * Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node
 * Note the intersection is defined by reference not value
 *
 * APPROACH
 * ========
 * 1. Save a representation of the object into a hash as you loop through the first list. Loop through
 *    the second list and if you come across a value that exist in the hash, return the node.
 *    - Time Complexity O(n + m) Loops through the first and the second list
 *    - Space Complexity O(n) Stores the keys from the first into the hash. The use of stringify may take longer/larger
 *      space leading to O(n^2) space
 */
function intersection(list1, list2) {
  let hash = {};
  let node = list1;
  while(node) {
    hash[JSON.stringify(node)] = true;
    node = node.next;
  }

  node = list2;
  while(node) {
    if(hash[JSON.stringify(node)])
      return node;
    node = node.next;
  }
  return null;
}

/**
 * Loop Detection
 * Given a linked list which might contain a loop, implement an algorithm that returns the node beginning
 * of the loop(if one exists)
 *
 * APPROACH
 * ========
 * 1. Create a hash and save the nodes on a hash as you visit them. If the node appears again return the node.
 *    It represent the location of the loop.
 *    - Time Complexity O(n)
 *    - Space complexity O(n)
 *  JS stringify suffers from circular loop. The next option is to find a representation of the object since in JS
 *  we do not get the reference address of the object. The customization may work part of the times but not always.
 */
function loopDetection(list) {
  let hash = {};
  let node = list;
  while(node) {
    let rep = {
      val: node.val,
      next: node.next ? node.next.val : null
    };
    if(hash[JSON.stringify(rep)]) return node;
    hash[JSON.stringify(rep)] = true;
    node = node.next;
  }
  return null;
}


module.exports = {
  removeDupsSln1,
  removeDupsSln2,
  KtoLastNode,
  KtoLastNodeSln2,
  deleteMiddle,
  partition,
  sumOfList,
  palindrome,
  intersection,
  loopDetection
}