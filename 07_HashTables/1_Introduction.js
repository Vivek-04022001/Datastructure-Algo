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

- 

*/
