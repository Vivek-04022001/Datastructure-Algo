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
 

-----------------------------------
Hash Functions, MD5 and sha256 ?
-----------------------------------
Hash functions are mathematical functions that take input data of arbitrary size and produce a fixed-size output, called a hash value or digest. These functions are designed to be efficient, one-way (irreversible), and collision-resistant (i.e., it should be computationally infeasible to find two different inputs that produce the same hash value).
The main difference between hash functions lies in their underlying algorithms, which determine their cryptographic strength, performance, and output size. Some commonly used hash functions include:

MD5 (Message Digest 5):

Developed by Ron Rivest in 1992.
Produces a 128-bit (16-byte) hash value.
Originally designed for digital signature applications.
Due to its weaknesses and susceptibility to collisions, MD5 is now considered insecure for cryptographic applications.


SHA-256 (Secure Hash Algorithm 256-bit):

Part of the SHA-2 family of hash functions, designed by the National Security Agency (NSA).
Produces a 256-bit (32-byte) hash value.
Widely used in various security applications, including digital signatures, secure protocols, and password hashing.
Considered much more secure than MD5, as no significant collisions have been found yet.



Working of MD5:
MD5 operates by breaking the input data into 512-bit blocks and processing them through four rounds of operations involving bitwise operations, modular additions, and non-linear functions. The final hash value is a 128-bit digest. However, MD5 is now considered insecure due to its vulnerabilities to collision attacks, which allow an attacker to find two different inputs that produce the same hash value.
Working of SHA-256:
SHA-256 is a member of the SHA-2 family and is more complex than MD5. It operates on 512-bit message blocks and applies a sequence of compression functions to produce the final 256-bit hash value. The algorithm involves several rounds of operations, including bitwise operations, modular additions, and non-linear functions, similar to MD5 but with increased complexity. SHA-256 is considered more secure than MD5 due to its larger output size and the lack of significant collisions found so far.
It's important to note that while SHA-256 is currently considered secure, newer and more secure hash functions, such as SHA-3 (e.g., SHA3-256), have been developed to address potential future weaknesses and provide even stronger cryptographic guarantees.
In general, when choosing a hash function for cryptographic applications, it is recommended to use the most secure and widely accepted function available, such as SHA-256 or SHA-3, rather than weaker functions like MD5, which are no longer considered secure.

---------------------------------------
Usage of hash functions in Javacript
---------------------------------------
In programming languages like JavaScript, the hash functions used in hash maps (also known as objects or dictionaries) are typically not cryptographic hash functions like MD5 or SHA-256. Instead, they use simpler, non-cryptographic hash functions that are designed for efficient hash table operations and fast lookups.
In JavaScript, the exact hash function used for hash maps (objects) is not specified by the language specification. It is implementation-dependent, meaning that different JavaScript engines (e.g., V8 in Chrome, SpiderMonkey in Firefox, JavaScriptCore in Safari) can use different hash functions for their respective object implementations.
However, most JavaScript engines use a variation of one of the following hash functions for hash maps:

Murmur Hash: A non-cryptographic hash function suitable for general hash-based lookup. It is designed to be fast and provide good distribution of hash values.
FNV Hash (Fowler–Noll–Vo hash function): A simple and efficient non-cryptographic hash function that has good performance and distributes hash values reasonably well.
PerlHash Function: A hash function originally used in the Perl programming language, which is a variant of the FNV hash function.

These hash functions are designed to be fast and provide good distribution of hash values for general-purpose use cases like hash tables and hash maps. They are not intended for cryptographic purposes, as they do not provide the same level of security and collision resistance as cryptographic hash functions like MD5 or SHA-256.
It's important to note that the exact implementation details and hash functions used in JavaScript engines can change over time, as they are constantly being optimized for performance and memory usage. However, the core principles of using non-cryptographic hash functions for efficient hash table operations remain the same across different JavaScript engines and versions.





Questions : What is the basic difference between different hash functions example , md5 and sha256?

*/
