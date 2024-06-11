class CrazyQueue {
  contructor() {
    this.first = []; // enqueue
    this.last = []; // dequeue
  }

  push(element) {
    for (let i = 0; i < this.first.length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(element);
    return this;
  }

  pop() {
    for (let i = 0; i < this.last.length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }

  peek() {
    if (this.first.length > 0) {
      return this.first[this.first.length - 1];
    }
    return this.last[0];
  }
}
