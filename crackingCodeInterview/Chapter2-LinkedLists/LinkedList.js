class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList{
  constructor() {
    this.root = null;
    this.tail = null;
  };

  addNode(val) {
    const node = new Node(val);
    if(!this.root){
      this.root = node;
      this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  findNode(val) {
    if(!this.root) return null;
    let n = this.root;
    while(n) {
      if(n.val == val) return n;
      n = n.next;
    }
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