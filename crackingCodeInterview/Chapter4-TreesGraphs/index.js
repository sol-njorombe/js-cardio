let ListOfDepth = require('./ListOfDepth');

class Queue{
  constructor() {
    this.store = [];
  }

  enqueue(node) {
    this.store.push(node);
  }

  dequeue() {
    return this.store.shift();
  }

  isEmpty() {
    return this.store.length === 0;
  }
}

/**
 * Route Between Nodes
 * Given a directed graph and two nodes(S and E), design an algorithm to
 * find whether there is a route from S to E
 *
 */
function routeBetween(graph, nodeS, nodeE) {
  let queue = new Queue();
  queue.enqueue(nodeS);
  nodeS.seen = true;
  while(!queue.isEmpty()) {
    let node = queue.dequeue();
    if(node === nodeE) return true;

    node.adjacents.forEach(n => {
      if(!n.seen) {
        n.seen = true;
        queue.enqueue(n);
      }
    });
  }
  graph.reInitilize();
  return false;
}

/**
 * Minimal Tree
 * Given a sorted increasing order array with unique integer element,
 * write an algorithm to create a binary search tree with minimal
 * height
 */
class MintreeNode {
  constructor(value) {
    this.val = value;
    this.right = null;
    this.left = null;
  }
}

function minimalTree(array) {
  if(array.length === 0) return null;
  if(array.length === 1) return new MintreeNode(array[0]);
  let middle = Math.floor(array.length / 2);
  let node = new MintreeNode(array[middle]);
  node.right = minimalTree(array.slice(middle + 1, array.length));
  node.left = minimalTree(array.slice(0, middle));
  return node;
}

/**
 * List of depths
 * Given a binary tree, design an algorithm which creates a linked list of all the
 * nodes at each depth. eg. if you have a tree with depth D, you will have D
 * linked lists.
 */
function listOfDepth(root) {
  let listOfNodes = [];
  let lastNode = null;
  let lastNodePointer = null;
  let queue = new Queue();
  queue.enqueue(root);
  queue.enqueue('separator');
  while(!queue.isEmpty()) {
    let node = queue.dequeue();
    if(node == 'separator') {
      listOfNodes.push(lastNode)
      lastNode = null;
      lastNodePointer = null;
      if(queue.store.length > 0)
        queue.enqueue('separator');
    } else {
      node.children.forEach(n => {
        queue.enqueue(n);
      });
      let listNode = new ListOfDepth.ListNode(node.val);
      if(lastNode) {
        lastNodePointer.next = listNode;
      } else {
        lastNode = listNode;
        lastNodePointer = listNode;
      }
    }
  }
  return listOfNodes;
}


/**
 * Check Balanced
 * Implement a function to check if a binary tree is balanced. For the purposes
 * of this question, a balanced tree is defined to be a tree such that the heights
 * of the subtrees of any node never differ by more than one
 */
class BalNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.leftToLeaf = null;
    this.rightToLeaf = null;
    this.toLeaf = null;
  }
}

function checkBalanced(node) {
  let leftChildBal = true;
  let rightChildBal = true;
  if(node.left) leftChildBal = checkBalanced(node.left);
  if(node.right) rightChildBal = checkBalanced(node.right);
  if(!leftChildBal || !rightChildBal) return false;

  if(!node.left) {
    node.leftToLeaf = 0;
  } else {
    node.leftToLeaf = node.left.toLeaf + 1;
  }
  if(!node.right) {
    node.rightToLeaf = 0;
  } else {
    node.rightToLeaf = node.right.toLeaf + 1;
  }

  node.toLeaf = node.leftToLeaf > node.rightToLeaf ? node.leftToLeaf : node.rightToLeaf;
  let balanced = Math.abs(node.leftToLeaf - node.rightToLeaf) <= 1;
  return  leftChildBal && rightChildBal && balanced;
}

/**
 * Validate BST
 * Implement a function to check if a binary tree is a binary search tree
 */
class ValNode {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

function validateBST(node) {
  let validLeft = true;
  let validRight = true;
  if(node.left) validLeft = validateBST(node.left);
  if(node.right) validRight = validateBST(node.right);
  if(!validRight || !validLeft) return false;

  if(node.right) {
    if(node.val > node.right.val) return false;
    if(node.right.left && node.val > node.right.left.val) return false;
  }

  if(node.left) {
    if(node.val < node.left.val) return false;
    if(node.left.right && node.val < node.left.right.val) return false;
  }
  return true;
}

/**
 * Successor
 * Write an algorithm to find the next node(i.e. in-order successor) of a given node
 * in a binary search tree. You may assume that each node has a link to its parent.
 */

/**
 * Build Order
 * You are given a list of projects and a list of dependencies (which is a list of pairs
 * of projects where the second project depends on the first). All of a project dependencies
 * must be built before the project is. Find a build order that will allow the projects to be
 * built. If there is no valid order, return an error.
 *
 * EXAMPLE
 * Input
 *   Projects: a, b, c, d, e, f
 *   Dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
 * Output
 *   f, e, a, b, d, c
 */


/**
 * First Common Ancestor
 * Design an algorithm and write code to find the first common ancestor of two nodes in a binary
 * tree. Avoid storing additional nodes in a data structure.
 * Note: This is not necessarily a binary search tree
 */

/**
 * BST Sequence
 * A binary search tree was created by traversing through an array from left to right and
 * inserting each element. Given a binary search tree with distinct elements, prinat all possible
 * arrays that could have led to this tree.
 * eg 2 -> [1, 3]
 * Output: { 2,1,3 }, { 2,3,1 }
 */

/**
 * Check Subtree
 * T1 and T2 are two very large binary trees, with T1 much bigger than T2. Create an algorithm
 * to determine if T2 is a subtree of T1.
 * A T2 is a subtree of T1 if there exists a node n in T1 such that the subtree of n is identical to T2
 * That is if you cut the tree at n the two would be identical.
 */

/**
 * Random Node
 * You are implementing a binary search tree from scratch which in addition to insert
 * find and delete, has method get RandomNode() which returns a random node from the tree.
 * All nodes should be equally likely to be chosen. Design and implement an algorithm for
 * getRandomNode, and explain how you would implement the rest of the methods
 */

/**
 * Paths with sum
 * You are given a binary tree in which each node contains an integer value (which might be
 * positive or negative). Design an algorithm to count the number of paths that sum to a
 * given value. The path does not need to start or end at the root or a leaf, but it must go
 * downwards (travelling only from parent nodes to child nodes).
 */



module.exports = {
  routeBetween,
  MintreeNode,
  minimalTree,
  listOfDepth,
  BalNode,
  checkBalanced,
  ValNode,
  validateBST
}