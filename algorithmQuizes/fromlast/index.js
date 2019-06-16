// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let node = list.head;
  let counter = 0;
  while(node) {
    node = node.next
    counter++;
  }
  let resultIndex = counter - (n + 1);
  let index = 0;
  node = list.head;
  while(index < resultIndex) {
    index++;
    node = node.next;
  }
  return node;
}

module.exports = fromLast;
