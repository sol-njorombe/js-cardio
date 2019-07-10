class TreeNode {
  constructor(value) {
    this.val = value;
    this.children = [];
  }
}

class ListNode {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

module.exports = {
  TreeNode,
  ListNode
};