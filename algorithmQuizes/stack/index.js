// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Node{
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null
  }

  push(val) {
    let node = new Node(val);
    if(!this.head) {
      this.head = node;
    }else{
      node.next = this.head;
      this.head = node;
    }
  }

  pop() {
    let node = this.head;
    this.head = this.head ? this.head.next : null;
    if(node) return node.val;
    return null;
  }

  peek() {
    if(this.head){ return this.head.val; }
    return null;
  }
}

module.exports = Stack;
