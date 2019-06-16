module.exports = class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
    this.parent = null;
    this.level = null;
  }

  add(data) {
    this.children.push(new Node(data));
  }
};
