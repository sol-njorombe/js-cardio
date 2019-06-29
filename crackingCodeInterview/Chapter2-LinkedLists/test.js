const slns = require('./index');
const LinkedList = require('./LinkedList');
const Node = require('./Node');

function testList() {
  let list = new LinkedList();
  list.addNode(1);
  list.addNode(2);
  list.addNode(3);
  list.addNode(4);
  list.addNode(3);
  list.addNode(5);
  list.addNode(5);
  list.addNode(5);
  return list
}

function unrepeated() {
  let list = new LinkedList();
  list.addNode(1);
  list.addNode(2);
  list.addNode(3);
  list.addNode(4);
  list.addNode(5);
  return list;
}

describe('Remove Dups', () => {
  test('solution 1: maintain a hash', () => {
    expect(slns.removeDupsSln1(testList())).toEqual(unrepeated());
  });

  test('solution 2: maintain a hash', () => {
    expect(slns.removeDupsSln2(testList())).toEqual(unrepeated());
  });

});



describe('Return Kth to last', () => {
  test('solution 1: double loops', () => {
    let list = testList();
    expect(slns.KtoLastNode(list, 1).val).toEqual(5);
    expect(slns.KtoLastNode(list, 4).val).toEqual(3);
    expect(slns.KtoLastNode(list, 7).val).toEqual(2);
    expect(slns.KtoLastNode(list, 20)).toEqual(null);
  });

  test('solution 2: lead and tail pointer', () => {
    let list = testList();
    expect(slns.KtoLastNodeSln2(list, 1).val).toEqual(5);
    expect(slns.KtoLastNodeSln2(list, 4).val).toEqual(3);
    expect(slns.KtoLastNodeSln2(list, 7).val).toEqual(2);
    expect(slns.KtoLastNodeSln2(list, 20)).toEqual(null);
  });

});

describe('Delete middle node', () => {
  test('Deletion of the middle node', () => {
    let list = testList();
    let n = list.findNode(3);
    slns.deleteMiddle(list, n);
    let test = testList();
    test.deleteNode(3);
    expect(list).toEqual(test);
  });
});

describe('partition a linked list', () => {
  test('partition a list around a value', () => {
    let list = new LinkedList();
    list.addNode(3);
    list.addNode(5);
    list.addNode(8);
    list.addNode(5);
    list.addNode(10);
    list.addNode(2);
    list.addNode(1);
    let partition1 = new LinkedList();
    partition1.addNode(3);
    partition1.addNode(2);
    partition1.addNode(1);
    let partition2 = new LinkedList();
    partition2.addNode(5);
    partition2.addNode(8);
    partition2.addNode(5);
    partition2.addNode(10);
    partition1.tail.next = partition2.root;
    partition1.tail = partition2.tail;
    expect(slns.partition(list, 5)).toEqual(partition1);
  });
});

describe('sum of two lists', () => {
  test('sum of two linked lists', () => {
    let list1 = new LinkedList();
    list1.addNode(7);
    list1.addNode(1);
    list1.addNode(6);

    let list2 = new LinkedList();
    list2.addNode(5);
    list2.addNode(9);
    list2.addNode(2);

    let result = new LinkedList();
    result.addNode(2);
    result.addNode(1);
    result.addNode(9);

    expect(slns.sumOfList(list1, list2)).toEqual(result);
  });
});

describe('Test if a linked list forms a palindrome', () => {
  test('palidrome of dad', () => {
    let list = new LinkedList();
    list.addNode('d');
    list.addNode('a');
    list.addNode('d');
    expect(slns.palindrome(list)).toEqual(true);
  });

  test('palidrome of cat', () => {
    let list = new LinkedList();
    list.addNode('c');
    list.addNode('a');
    list.addNode('t');
    expect(slns.palindrome(list)).toEqual(false);
  });

  test('palidrome of wateretaw', () => {
    let list = new LinkedList();
    list.addNode('w');
    list.addNode('a');
    list.addNode('t');
    list.addNode('e');
    list.addNode('r');
    list.addNode('e');
    list.addNode('t');
    list.addNode('a');
    list.addNode('w');
    expect(slns.palindrome(list)).toEqual(true);
  });
});

describe('intersection of two lists', () => {
  test('intersection', () => {
    let a = new Node(1);
    let b = new Node(2, a);
    let c = new Node(7, b);
    let d = new Node(9, c);
    let e = new Node(5, d);
    let f = new Node(1, e);
    let list1 = new Node(3, f);
    let h = new Node(4, c); // intersect at c
    let list2 = new Node(6, h);
    expect(slns.intersection(list1, list2)).toEqual(c);
  });
});

describe('find the intersection node in a single list with loop', () => {
  test('intersection in looping list', () => {
    let a = new Node(1);
    let b = new Node(2, a);
    let c = new Node(7, b);
    let d = new Node(9, c);
    let e = new Node(5, d);
    let f = new Node(1, e);
    let g = new Node(4, f);
    let list = new Node(6, g);
    a.next = d;
    expect(slns.loopDetection(list)).toEqual(d);
  });
});