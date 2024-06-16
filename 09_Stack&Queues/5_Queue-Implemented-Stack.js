class CrazyQueue {
  constructor() {
    this.first = []; // enqueue
    this.last = []; // dequeue
  }

  push(element) {
    this.first.push(element);
    return this;
  }

  pop() {
    if (this.last.length === 0) {
      while (this.first.length > 0) {
        this.last.push(this.first.pop());
      }
    }
    return this.last.pop();
  }

  peek() {
    if (this.last.length > 0) {
      return this.last[this.last.length - 1];
    }
    return this.first[0];
  }
}
