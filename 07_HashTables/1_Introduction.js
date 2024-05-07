/*

----------------------------
Hash Introduction
----------------------------

- Hash tables, also known as hash maps or dictionaries in other programming languages, are a fundamental data structure used to store key-value pairs. They offer efficient insertion, deletion, and retrieval of elements based on keys.

- In JavaScript, hash tables are often implemented using objects ({}) or Maps (Map). Here's a brief overview of each:

- 1. Object-based Hash Tables:
JavaScript objects are essentially hash tables under the hood. They allow you to store key-value pairs where keys are unique strings. Object-based hash tables provide constant-time (O(1)) average case performance for insertion, deletion, and retrieval.
    - One important thing to note is that object keys are always strings. If you try to use non-string keys, JavaScript will automatically convert them to strings.

- 2. Map-based Hash Tables:
Maps provide a more versatile way to create hash tables. They can use any data type as keys and offer more functionalities compared to objects, such as iteration over keys and values. Maps also maintain the order of elements, which can be useful in certain scenarios. 

-----------------------------------
Hash Functions
-----------------------------------

- Hash Functions : A hash function is a function that takes an input (or 'key') and produces a fixed-size string of characters, which is typically a numerical representation of the input data. The output, known as the hash code or hash value, is used to index the data stored in hash-based data structures like hash maps. A good hash function should evenly distribute the keys across the available slots in the data structure to minimize collisions.

In JavaScript, hash functions are often used internally by hash map implementations. For example, when you set a key-value pair in a hash map, the hash function is applied to the key to determine where in the underlying data structure the value should be stored.

- Hash Generator : Hash generators, or hash code generators, are functions or algorithms used to generate hash codes from input data. These generators are crucial for efficiently storing and retrieving data in hash-based data structures. They typically convert variable-length input data into a fixed-size hash code, which serves as an index for accessing or storing the data in the data structure.

In JavaScript, hash generators are used implicitly in hash map implementations. When you set a key-value pair in a hash map, the hash generator calculates the hash code for the key, allowing the map to efficiently store and retrieve the associated value.

- Idempotent : In the context of hash functions, an idempotent function is one that produces the same output when applied repeatedly to the same input. In other words, if you apply an idempotent function multiple times to the same input, the result remains unchanged after the first application.

In the context of hash map operations, idempotency ensures that storing the same key-value pair multiple times has no additional effect beyond the initial insertion. For example, if you attempt to store a key-value pair in a hash map and the key already exists, the value associated with that key will be updated, but the overall state of the map remains unchanged.

- Relationship to Hash Map Data structure: 

In a hash map data structure, hash functions and hash generators play a crucial role in determining where to store and retrieve key-value pairs efficiently. The hash function calculates the index (or bucket) where a value should be stored based on its associated key. Hash generators ensure that the calculated hash code is consistent and reliable for a given input.

Idempotency is essential in hash map operations to ensure that storing or retrieving the same data multiple times does not alter the structure of the map beyond the initial insertion or retrieval.


-----------------------------------
Hash Collision
-----------------------------------
- Insert, Lookup, Deletion, Searching has O(1) time complexity

- Hash Collision : 
    1. Without Collision (Ideal Case) :In the absence of collisions, hash map operations have an average time complexity of O(1). This means that regardless of the size of the data set, the time taken to perform operations remains constant on average.

    2. With Collision: 
    When collisions occur, the time complexity of hash map operations can degrade. In the worst-case scenario, where all keys produce the same hash code (a degenerate hash function), the time complexity can be O(n), where n is the number of keys.
    
    However, in well-designed hash functions and hash maps, collisions are typically resolved using collision resolution techniques such as chaining or open addressing.
    
    In chaining, each bucket in the hash table is associated with a linked list or another data structure to store multiple key-value pairs that hash to the same index. The time complexity of operations in a chained hash map depends on the efficiency of the underlying data structure used for chaining.
    
    In open addressing, when a collision occurs, the hash map looks for an alternative location to store the key-value pair within the hash table. This may involve probing or searching for an empty slot. The time complexity of operations in an open-addressed hash map also depends on the efficiency of the probing strategy used.
    


-----------------------------------
Hash Tables in Different Language
-----------------------------------


*/
