// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    let head = this.head;
    let node = new Node(data, head);
    this.head = node;
  }

  size() {
    let counter = 0;
    let node = this.head;
    while(node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head
    while(node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if(!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    let node = this.head;
    if(!node) return;
    if(!node.next) {
      this.head = null;
      return;
    }
    while(node.next.next){ node = node.next; }
    if(node.next) node.next = null;
  }

  insertLast(data) {
    if(!this.head) {
      this.head = new Node(data);
      return;
    }
    let node = this.head;
    while(node.next) { node = node.next; }
    node.next = new Node(data);
  }

  getAt(index) {
    let i = 0;
    let node = this.head;
    while(node) {
      if(i === index) return node;
      node = node.next;
      i++;
    }

    return null;
  }

  removeAt(index) {
    if(!this.head) return;
    if(index === 0) {
      this.removeFirst();
      return;
    }

    let prev = null;
    let i = 0;
    let node = this.head;
    while(node) {
      if(i === index) {
        prev.next = node.next;
        return;
      }

      prev = node;
      node = node.next;
      i++;
    }
  }

  insertAt(data, index) {
    if(index === 0) return this.insertFirst(data);
    let node = this.head;
    let i = 1;
    while(node) {
      if(i === index || !node.next) {
        let child = node.next || null;
        node.next = new Node(data, child);
        return;
      }
      node = node.next;
      i++;
    }
  }

  forEach(fn){
    let node = this.head;
    while(node) {
      fn(node);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while(node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
