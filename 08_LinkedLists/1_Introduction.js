/*

Questions :
1. What  is pointer?



----------------
Linked List
----------------

Linked List Overview:

Linear data structure where elements are not stored in contiguous memory locations
Elements are linked using pointers (references to the next node)
Consists of nodes, each node contains data and a reference to the next node
Head pointer points to the first node, tail pointer points to the last node

Types of Linked Lists:

Singly Linked List: Each node has a reference to the next node
Doubly Linked List: Each node has references to the next and previous nodes
Circular Linked List: Last node points back to the head node

Advantages:

Dynamic size (easy insertion and deletion)
Efficient memory utilization (no need to pre-allocate memory)
Insertion and deletion at the beginning are O(1) operations

Disadvantages:

No random access (need to traverse from the start)
More memory overhead (additional pointers)
Accessing/Searching is O(n) operation

Basic Operations:

Insertion (at beginning, end, or middle)
Deletion (at beginning, end, or middle)
Traversal (linear search)
Finding length

prepend, append -> O(1)
lookup, insert, delete at index -> O(n)

inshort, linked  list is great for fast  insertion, deletion (at the start or at the end), ordered, size, 
but worst for lookup because we have traverse the entire linked list over and over again . Also it consume more memory as compared to hashtables and arrays


--------------------
Doubly Linked List
--------------------

Doubly Linked List Overview:

Each node contains three parts: data, a pointer to the next node, and a pointer to the previous node.
It maintains a head pointer (pointing to the first node) and a tail pointer (pointing to the last node).
Allows traversal in both forward and backward directions.

Advantages of Doubly Linked List:

Bi-directional Traversal: Nodes can be traversed in both forward and backward directions, providing more flexibility.
Maintains Head and Tail: Direct access to both the head and tail nodes is possible, making operations like insertion and deletion at the beginning and end more efficient (O(1) time complexity).

Disadvantages of Doubly Linked List:

Memory Overhead: Each node requires an extra pointer to store the address of the previous node, increasing memory usage compared to a Singly Linked List.
Increased Complexity: The implementation of operations like insertion and deletion is more complex due to the need to update the next and previous pointers correctly.
Reverse Traversal Required: Certain operations, such as finding the length of the list or accessing the last node, may require traversal from the tail, which can be inefficient if only the head pointer is available.

-> Prepend, Append => O(1)
-> Lookup, Insert, Delete => O(n)

------------------------------------------
What is the significance of the  Pointers?
------------------------------------------
In the context of linked lists, a pointer refers to a variable or a property that stores the memory address of another node (or element) in the list. Pointers are used to establish the links between nodes, allowing navigation through the list.
In a singly linked list, each node typically has two parts:

Data: This part stores the actual data or value of the node.
Next Pointer: This part stores the memory address of the next node in the list, effectively creating a link to the next node.

Pointers are the fundamental building blocks that enable the creation and navigation of linked lists. By updating and following these pointers, we can perform operations like insertion, deletion, and traversal on the linked list data structure.
Pointers are essential in linked lists because they allow nodes to be scattered in memory, unlike arrays where elements are stored contiguously. This dynamic memory allocation and linking of nodes through pointers provide the flexibility and benefits of linked lists, such as efficient insertion and deletion operations, at the cost of some additional memory overhead for storing the pointers themselves.

*/
