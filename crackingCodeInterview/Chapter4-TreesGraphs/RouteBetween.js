class Node{
  constructor(name) {
    this.name = name;
    this.adjacents = [];
    this.seen = false;
  }
}

class Graph{
  constructor() {
    let a = new Node('a');
    let b = new Node('b');
    let c = new Node('c');
    let d = new Node('d');
    let e = new Node('e');
    let f = new Node('f');
    a.adjacents = [b,d];
    b.adjacents = [c];
    c.adjacents = [f];
    f.adjacents = [d, e];
    this.vertices = [a, b, c, d, e, f];
  }

  reInitilize() {
    this.vertices.forEach(node => {
      node.seen = false;
    })
  }
}

module.exports = {
  Graph
}