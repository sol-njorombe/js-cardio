// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.store = new Stack();
    this.temp = new Stack();
  }

  add(val) {
    this.store.push(val);
  }

  remove() {
    let dataLength = this.store.data.length;
    for(let i = 0; i < dataLength; i++) {
      this.temp.push(this.store.pop());
    }
    let result = this.temp.pop();
    for(let i = 0; i < (dataLength - 1); i++) {
      this.store.push(this.temp.pop());
    }
    return result;
  }

  peek() {
    let dataLength = this.store.data.length;
    for(let i = 0; i < dataLength; i++) {
      this.temp.push(this.store.pop());
    }
    let result = this.temp.peek();
    for(let i = 0; i < dataLength; i++) {
      this.store.push(this.temp.pop());
    }
    return result;
  }
}

module.exports = Queue;
