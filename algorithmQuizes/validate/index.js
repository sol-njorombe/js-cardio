// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function findMin(node) {
  if(!node) return null;
  if(!node.left) return node;
  return findMin(node.left);
}

function findMax(node) {
  if(!node) return null;
  if(!node.right) return node;
  return findMax(node.right);
}

function validate(node, min = null, max = null) {
  min = min || findMin();
  max = max || findMax();
  let rightValid = false;
  let leftValid = false;
  if(node.right){
    if(node.right.data < node.data) return false;
    if(node.right.left && node.right.left.data < node.data) return false;
    rightValid = validate(node.right, min, max);
  }else{
    rightValid = true;
  }
  if(node.left){
    if(node.left.data > node.data) return false;
    if(node.left.right && node.left.right.data > node.data) return false;
    leftValid = validate(node.left, min, max);
  }else{
    leftValid = true;
  }
  return leftValid && rightValid;
}

module.exports = validate;
