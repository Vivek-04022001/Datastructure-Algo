// --------------------------------------
// Implementing Hash Tables in Javascript
// --------------------------------------


class HashTable {
    constructor(size){
      this.data = new Array(size);
    }

    set(key,value){
        const address = this._hash(key);
        this.data[address] = key;
        this.data[address+1] = value;

        return [address,key,value]
    }

    get(key){
        const indexOfKey = this.data.indexOf(key);
        return this.data[indexOfKey+1]
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000)
  myHashTable.get('grapes')
  myHashTable.set('apples', 9)
  myHashTable.get('apples')
  console.log(myHashTable)