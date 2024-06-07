class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // append
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printLinkedList();
  }
  //prepend
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this.printLinkedList();
  }

  // insert
  insert(index, value) {
    // check the param
    if (index === 0) {
      return this.prepend();
    }
    if (index === this.length - 1) {
      return this.append();
    }
    if (index >= this.length) {
      console.log("Exceed the limit of linkedlist");
      return;
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const currentNode = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    currentNode.prev = newNode;
    newNode.next = currentNode;
    this.length++;
    return this.printLinkedList();
  }

  // 

  // print my linkedlist
  printLinkedList() {
    let array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }

  // traverse to index
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.prepend(-1);
myLinkedList.insert(2, 8);
// myLinkedList.insert(4, 4);
// myLinkedList.remove(6);
// myLinkedList.printList();
// myLinkedList.insert(2, 99);
//   myLinkedList.insert(20, 88);
//   myLinkedList.remove(2);
