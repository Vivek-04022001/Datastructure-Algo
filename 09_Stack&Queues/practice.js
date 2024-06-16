class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// queue -> fifo : first in first out;
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    console.log(this.first);
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
      this.length = 1;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.length++;
    }
  }
  dequeue() {
    if (this.length === 0) {
    }
  }
}

const myQueue = new Queue();

//Joy
//Matt
//Pavel
//Samir
