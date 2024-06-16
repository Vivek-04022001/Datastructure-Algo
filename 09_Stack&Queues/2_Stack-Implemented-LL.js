class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    console.log(this.top.value);
  }

  // in stack we nodes in the beggining of the stack therefore it always (new Node) -> (previous top node) -> (bottom Node)
  // new node will be the top node in the stack. The new node will point to previous
  //   in stack , this.top = this.head & this.bottom = this.tail
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return holdingPointer;
  }

  isEmpty() {
    if (this.length > 0) {
      console.log("stack is not empty");
      return;
    } else {
      console.log("stack is empty");
      return;
    }
  }
  printStack() {
    if (this.length === 0) {
      console.log(`stack is empty!`);
    }

    let currentNode = this.top;
    console.log("--------------------");
    while (currentNode) {
      console.log(`||   ${currentNode.value}   ||`);
      if (currentNode.next) {
        console.log("       ⬇️       ");
      }
      currentNode = currentNode.next;
    }
    console.log("----------------------");
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("youtube");
myStack.push("github");
myStack.push("leetcode");
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.printStack();
myStack.isEmpty();

// console.log(myStack);
