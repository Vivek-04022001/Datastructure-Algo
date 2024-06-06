
class Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(value){
    this.head = {
      value,
      next : null,
      prev : null
    }
    this.tail = this.head;
    this.length = 1
  }

  // append
  append(value){
    
  }
}


let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.prepend(-1);
myLinkedList.insert(2, 8);
myLinkedList.insert(4, 4);
myLinkedList.remove(6);
// myLinkedList.printList();
// myLinkedList.insert(2, 99);
//   myLinkedList.insert(20, 88);
//   myLinkedList.remove(2);
