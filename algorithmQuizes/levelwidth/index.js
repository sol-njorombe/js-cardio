// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let levelCounts = {};
  root.level = 1;
  let nodeQueue = [root];
  let node = nodeQueue[0];
  let queueIndex = 1;
  while(node) {
    let children = node.children;
    children.forEach(child => {
      child.parent = node;
      child.level = node.level + 1;
      nodeQueue.push(child);
    });
    node = nodeQueue[queueIndex] || null;
    queueIndex++;
  }
  nodeQueue.forEach(node => {
    levelCounts[node.level] = levelCounts[node.level] ? levelCounts[node.level] + 1 : 1;
  })
  let levels = Object.keys(levelCounts).sort();
  let result = levels.map(key => levelCounts[key]);
  return result;
}

module.exports = levelWidth;
