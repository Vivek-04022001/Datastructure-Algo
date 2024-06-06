// --------------------------------------
// Implementing Hash Tables in Javascript
// --------------------------------------

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // set
  set(key, value) {
    let address = this._hash(key);
    console.log(address);

    if (this.data[address]) {
      this.data[address].push([key, value]);
    }
    this.data[address] = [];
    this.data[address].push([key, value]);
    console.log(this.data);
  }

  // get
  get(key) {
    let address = this._hash(key);
    let currentBucket = this.data[address];
    if (currentBucket.length > 1) {
      for (let i = 0; i < currentBucket.length; i++) {
        console.log(currentBucket[i][1]);
        return;
      }
    }
    console.log(currentBucket[0][1]);
    return;
  }

  // arrays of keys
  keys() {
    let array = [];
    for (let i = 0; i < this.data.length; i++) {
      let currentBucket = this.data[i];

      if (currentBucket && currentBucket.length > 1) {
        for (let j = 0; j < currentBucket.length; j++) {
          console.log(currentBucket[j][0]);
        }
      } else if (currentBucket && currentBucket.length === 1) {
        array.push(currentBucket[0][0]);
      }
    }
    console.log(array);
    return;
  }

  //   hash function is always O(1) in hashtables
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const myHashTable = new HashTable(1000);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 20);
myHashTable.set("bananas", 620);
myHashTable.set("oranges", 420);
myHashTable.set("kiwi", 120);
myHashTable.set("kiwi2", 120);
myHashTable.set("kiwi42", 120);
// myHashTable.get("grapes");
console.log("----------");

myHashTable.keys();

// myHashTable.get("grapes");
// myHashTable.set("apples", 9);
// myHashTable.get("apples");
// console.log(myHashTable);
