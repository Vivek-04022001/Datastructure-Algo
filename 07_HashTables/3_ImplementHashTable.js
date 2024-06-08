// --------------------------------------
// Implementing Hash Tables in Javascript
// --------------------------------------

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  //   O(1)
  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push([key, value]);
      console.log(this.data);
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  // this function has least time complexity

  //   O(1) and O(n) where n is the size of hashtables.
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket.length) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    } else {
      return undefined;
    }
  }

  //   O(n) n: is the length of hash tables.
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }

    return keysArray;
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

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 9);
myHashTable.get("apples");
console.log(myHashTable);
