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
    console.log(this.first)
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
    } else {
      // top -> bottom || first -> last
      // Joy -> Matt -> Pavel -> Samir -> (first -> last)
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (this.length === 0) {
      return null;
    }
    if (this.first === null) {
      this.last = null;
    }

    const holdingPointer = this.first;
    this.first = this.first.next;
    // clean-up holdingPointer.next value;
    this.holdingPointer.next = null;
    this.length--;
    return holdingPointer.value;
  }
  //isEmpty;
}

const myQueue = new Queue();

//Joy
//Matt
//Pavel
//Samir
