/**
 * Three In One
 * Describe how you would use a single array to implement three stacks
 */
class ThreeInOne{
  constructor() {
    this.stackArr = [];
    this.lengths = { 1: 0, 2: 0, 3: 0 };
  }

  findIndex(stackIndex) {
    let stackTop = 0;
    for(let i = 1; i <= stackIndex; i++) {
      stackTop = stackTop + Number(this.lengths[i]);
    }
    return stackTop;
  }

  push(stackIndex, value) {
    let index = this.findIndex(stackIndex);
    this.stackArr.splice(index, 0, value);
    this.lengths[stackIndex]++;
  }

  pop(stackIndex) {
    if(this.lengths[stackIndex] == 0) return null;
    let index = this.findIndex(stackIndex) - 1;
    let val = this.stackArr[index];
    this.stackArr.splice(index, 1);
    this.lengths[stackIndex]--;
    return val;
  }

  peek(stackIndex) {
    if(this.lengths[stackIndex] == 0) return null;
    let index = this.findIndex(stackIndex) - 1;
    return this.stackArr[index];
  }

  isEmpty(stackIndex) {
    return this.lengths[stackIndex] == 0;
  }
}

/**
 * Stack Min
 * How would you design a stack which in addition to push and pop has a function min which
 * returns the minimum element? push, pop, min should all operate in O(1) time
 */
class Node{
  constructor(val) {
    this.val = val;
    this.min = null;
  }
}

class StackMin{
  constructor() {
    this.stack = [];
  }

  push(val) {
    let node = new Node(val);
    if(this.isEmpty())
      node.min = node;
    else {
      let top = this.peek();
      if(node.val <= top.min.val)
        node.min = node;
      else
        node.min = top.min;
    }
    this.stack.push(node);
  }

  pop() {
    return this.stack.pop;
  }

  min() {
    let top = this.peek();
    return top.min;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length == 0;
  }
}

/**
 * Stack Of Plates
 * Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore,
 * in real life you would likely start a new stack when the previous stack exceeds some threshold.
 * Implement a data structure SetOfStacks that mimicks this. SetOfStacks should be composed of
 * several stacks and should create a new stack once the previous one exceeds capacity. SetOfStacks.push
 * and SetOfStacks.pop() should behave identically to a single stack.
 *
 * Follow Up
 * Implement a function popAt(int index) which performs pop operation on a specific subtask
 */
class StackOfPlates {
  constructor(threshold) {
    this.threshold = threshold;
    this.shelf = [];
    this.activeStack = [];
  }

  push(value) {
    this.pushShelf();
    this.activeStack.push(value);
  }

  pop() {
    this.popShelf();
    return this.activeStack.pop();
  }

  pushShelf() {
    if(this.activeStack.length === this.threshold) {
      this.shelf.push(this.activeStack);
      this.activeStack = [];
    }
  }

  popShelf() {
    if(this.activeStack.length === 0) {
      this.activeStack = this.shelf.pop();
    }
  }

  popAt(stackIndex) {
    if(stackIndex > this.shelf.length) return null;
    return this.shelf[stackIndex].pop();
  }
}

/**
 * Queue Via Stacks
 * Implement a MyQueue class which implements a queue using two stacks
 *
 */
class Stack {
  constructor() {
    this.store = [];
  }

  push(val) {
    this.store.push(val);
  }

  pop() {
    return this.store.pop();
  }

  peek() {
    return this.store[this.store.length - 1];
  }
}

class MyQueue {
  constructor() {
    this.mainStack = new Stack();
    this.temp = new Stack();
  }

  enqueue(val) {
    this.mainStack.push(val);
  }

  dequeue() {
    while(this.mainStack.peek())
      this.temp.push(this.mainStack.pop());

    let val = this.temp.pop();
    while(this.temp.peek())
      this.mainStack.push(this.temp.pop());

    return val;
  }

}

/**
 * Sort Stack
 * Write a program to sort a stack such that the smallest item are on the top. You can use an additional
 * temporary stack, but you may not copy the elements into any other data structure (such as an array).
 * The stack supports the following operations: pop, push, peek, and isEmpty
 */
class SortedStack {
  constructor() {
    this.mainStack = new Stack();
    this.temp = new Stack();
  }

  push(val) {
    while(this.mainStack.peek() && this.mainStack.peek() < val) {
      this.temp.push(this.mainStack.pop());
    }

    this.mainStack.push(val);
    while(this.temp.peek()) {
      this.mainStack.push(this.temp.pop());
    }
  }

  pop() {
    return this.mainStack.pop();
  }

  isEmpty() {
    return !(this.mainStack.peek());
  }
}

/**
 * Animal Shelter
 * An animal shelter, which holds only dogs and cats, operates on a strictly "first in first out basis"
 * People must adopt either the "oldest" of all animals at the shelter, or they can select whether they would prefer
 * a dog or a cat(and they will receive the oldest animal of that kind). Create a data structure to maintain
 * this system and implement operations such as enqueue, dequeueAny, dequeueDog, dequeueCat
 */
class Animal{
  constructor(str) {
    this.type = str;
  }
}

class AnimalShelter {
  constructor() {
    this.store = [];
  }

  enqueue(type) {
    let animal = new Animal(type);
    this.store.push(animal);
  }

  dequeueAny() {
    return this.store.shift();
  }

  dequeueDog() {
    for(let i = 0; i < this.store.length; i++) {
      if(this.store[i].type === 'dog') {
        let dog = this.store[i];
        this.store.splice(i, 1);
        return dog;
      }
    }
    return null;
  }

  dequeueCat() {
    for(let i = 0; i < this.store.length; i++) {
      if(this.store[i].type === 'cat') {
        let dog = this.store[i];
        this.store.splice(i, 1);
        return dog;
      }
    }
    return null;
  }
}

module.exports = {
  ThreeInOne,
  StackMin,
  StackOfPlates,
  MyQueue,
  SortedStack,
  AnimalShelter
};