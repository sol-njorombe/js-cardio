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
    copy.addNode(root.val); // This is inefficient. We should track the last node and add to that
    root = root.next;
  }
  return copy;
}

module.exports = {
  removeDupsSln1
}