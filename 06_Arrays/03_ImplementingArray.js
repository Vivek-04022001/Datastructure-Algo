// Implementation of Array
class MyArray {
  constructor() {
    this.length = 0;
    this.data = [];
  }
  // access the elements
  get(index) {
    return this.data[index];
  }

  // add elements
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  //remove element from end
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    this.length--
    return item;
  }
  
//   shifting elements one element backward
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length-1]
  }
}

const newArray = new MyArray();
newArray.push(1);
newArray.push(2);
newArray.push(3);
console.log(newArray);
// console.log(newArray.pop());
// console.log(newArray.pop());
newArray.delete(1);
console.log(newArray);
