// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    let node = new Node(data);
    this.children.push(node);
  }

  remove(data) {
    let index = this.children.indexOf(data);
    this.children.splice(index, 1);
  }

  traverseBF(fn) {
    // Revisit this. It feels wrong
    this.children.forEach(child => {
      fn(child);
    });
    this.children.forEach(child => {
      child.traverseBF(fn);
    })
  }

  traverseDF(fn) {
    fn(this);
    this.children.forEach(child => {
      child.traverseDF(fn);
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseDF(fn) {
    if(this.root) this.root.traverseDF(fn);
  }

  traverseBF(fn) {
    if(this.root) {
      fn(this.root);
      this.root.traverseBF(fn);
    }
  }
}

module.exports = { Tree, Node };
