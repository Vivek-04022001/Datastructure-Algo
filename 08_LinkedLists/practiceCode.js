// Implement single linked list in javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // append(value)
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return printLinkedList();
  }

  // prepend
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.printLinkedList();
  }

  // insert
  insert(index, value){
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index-1)
    const holdingPointer = leader.next
    newNode.next = holdingPointer
    leader.next = newNode;
    this.length++;
    return this.printLinkedList()
  }

  // print list
  printLinkedList() {
    let currentNode = this.head;
    let array = [];
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(array);
  }

  // traverse the linked list
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

const myLinkedList = new LinkedList(10);
myLinkedList.append(12);
myLinkedList.prepend(9);
myLinkedList.insert(1, 88);
myLinkedList.remove(1);
