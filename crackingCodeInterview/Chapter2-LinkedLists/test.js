const slns = require('./index');
const LinkedList = require('./LinkedList');

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
  let list = testList();
  let n = list.findNode(3);
  slns.deleteMiddle(list, n);
  let test = testList();
  test.deleteNode(3);
  expect(list).toEqual(test);
});