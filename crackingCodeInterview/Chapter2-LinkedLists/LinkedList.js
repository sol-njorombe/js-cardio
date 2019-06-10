class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList{
  constructor() {
    this.root = null
  };

  addNode(val) {
    const node = new Node(val);
    if(!this.root){
      this.root = node;
      return;
    }

    let root = this.root;
    while(root.next) {
      root = root.next;
    }

    root.next = node;
  }

  deleteNode(val) {
    if(!this.root) { return; }
    if(this.root.val === val) {
      this.root = this.root.next;
      return;
    }

    let parent = this.root;
    let current = this.root.next;
    while(current) {
      if(current.val === val) {
        parent.next = current.next;
        return;
      }
      parent = current;
      current = current.next;
    }
  }
}

module.exports = LinkedList