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
});

describe('Return Kth to last', () => {
  test('solution 1: double loops', () => {
    let list = testList();
    expect(slns.KtoLastNode(list, 1).val).toEqual(5);
    expect(slns.KtoLastNode(list, 4).val).toEqual(3);
    expect(slns.KtoLastNode(list, 7).val).toEqual(2);
    expect(slns.KtoLastNode(list, 20)).toEqual(null);
  });
});