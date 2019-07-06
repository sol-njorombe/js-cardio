const slns = require('./index');

describe('Three stacks in one array', () => {
  test('has all stack functions', () => {
    let threeInOne = new slns.ThreeInOne();
    expect(typeof threeInOne.push).toEqual('function');
    expect(typeof threeInOne.pop).toEqual('function');
    expect(typeof threeInOne.peek).toEqual('function');
    expect(typeof threeInOne.isEmpty).toEqual('function');
  });

  test('is empty returns true on an initialized stack', () => {
    let threeInOne = new slns.ThreeInOne();
    expect(threeInOne.isEmpty(1)).toEqual(true);
    expect(threeInOne.isEmpty(2)).toEqual(true);
    expect(threeInOne.isEmpty(3)).toEqual(true);
  });

  test('pop push and peek work as expected', () => {
    let threeInOne = new slns.ThreeInOne();
    threeInOne.push(1, 1);
    threeInOne.push(2, 2);
    threeInOne.push(3, 3);
    expect(threeInOne.stackArr).toContain(1);
    expect(threeInOne.stackArr).toContain(2);
    expect(threeInOne.stackArr).toContain(3);
    expect(threeInOne.peek(1)).toEqual(1);
    expect(threeInOne.peek(2)).toEqual(2);
    expect(threeInOne.peek(3)).toEqual(3);
    expect(threeInOne.pop(1)).toEqual(1);
    expect(threeInOne.pop(2)).toEqual(2);
    expect(threeInOne.pop(3)).toEqual(3);
  });
});

describe('Stack with min functionality', () => {
  test('has all stack functions', () => {
    let stackMin = new slns.StackMin();
    expect(typeof stackMin.push).toEqual('function');
    expect(typeof stackMin.pop).toEqual('function');
    expect(typeof stackMin.peek).toEqual('function');
    expect(typeof stackMin.isEmpty).toEqual('function');
    expect(typeof stackMin.min).toEqual('function');
  });

  test('returns the correct min value', () => {
    let stackMin = new slns.StackMin();
    stackMin.push(5);
    stackMin.push(6);
    stackMin.push(7);
    expect(stackMin.min().val).toEqual(5);
    stackMin.push(3)
    expect(stackMin.min().val).toEqual(3);
  });
});

describe('Stack of plates', () => {
  test('test pop and push functions', () => {
    let stack = new slns.StackOfPlates(2);
    expect(typeof stack.push).toEqual('function');
    expect(typeof stack.pop).toEqual('function');
    expect(typeof stack.popAt).toEqual('function');
  });

  test('test the length of the stacks', () => {
    let stack = new slns.StackOfPlates(2);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    expect(stack.shelf[0].length).toEqual(2);
    expect(stack.shelf[1].length).toEqual(2);
  });

  test('pop works correctly', () => {
    let stack = new slns.StackOfPlates(2);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    expect(stack.pop()).toEqual(5);
    expect(stack.pop()).toEqual(4);
  });
});

describe('Queue based on two stacks', () => {
  test('hash the two functions enqueue and dequeue', () => {
    let queue = new slns.MyQueue();
    expect(typeof queue.enqueue).toEqual('function');
    expect(typeof queue.dequeue).toEqual('function');
  });

  test('enqueue values returned by dequeue', () => {
    let queue = new slns.MyQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
  });
});

describe('Sorted stack', () => {
  test('An initialized empty stack isEmpty return true', () => {
    let stack = new slns.SortedStack();
    expect(stack.isEmpty()).toEqual(true);
  });

  test('the value on top is always the min', () => {
    let stack = new slns.SortedStack();
    stack.push(23);
    stack.push(21);
    stack.push(34);
    expect(stack.pop()).toEqual(21);
  });
});


describe('Test the animal shelter queue', () => {
  test('Test functions', () => {
    let shelter = new slns.AnimalShelter();
    expect(typeof shelter.enqueue).toEqual('function');
    expect(typeof shelter.dequeueAny).toEqual('function');
    expect(typeof shelter.dequeueCat).toEqual('function');
    expect(typeof shelter.dequeueDog).toEqual('function');
  });

  test('enqueue and dequeue', () => {
    let shelter = new slns.AnimalShelter();
    shelter.enqueue('dog');
    shelter.enqueue('cat');
    shelter.enqueue('cat');
    shelter.enqueue('dog');
    expect(shelter.dequeueAny().type).toEqual('dog');
    expect(shelter.dequeueDog().type).toEqual('dog');
    expect(shelter.dequeueCat().type).toEqual('cat');
  });
});