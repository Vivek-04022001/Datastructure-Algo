
/*

----------------------
        STACKS
----------------------

Definition
A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. This means that the last element added to the stack is the first one to be removed. Think of it like a stack of plates: you add plates to the top and also remove them from the top.

Operations
push(element): Add an element to the top of the stack.
pop(): Remove and return the top element from the stack.
peek(): Return the top element without removing it from the stack.
isEmpty(): Check if the stack is empty.
size(): Return the number of elements in the stack.

* Lookup -> O(n)
* Pop, Push, Peek -> O(1)

----------------------
        Queues
----------------------
Definition
A queue is a linear data structure that follows the First In, First Out (FIFO) principle. This means that the first element added to the queue is the first one to be removed. Think of it like a line of people waiting for a bus: the first person in line is the first one to board the bus.

Operations
enqueue(element): Add an element to the end of the queue.
dequeue(): Remove and return the front element from the queue.
front(): Return the front element without removing it from the queue.
isEmpty(): Check if the queue is empty.
size(): Return the number of elements in the queue.

* Lookup -> O(n)
* enqueue, dequeue, peek -> O(1)


-------------------------------------
Implementing of Stacks and Queues
-------------------------------------
When deciding between arrays and linked lists to implement stacks and queues, it's important to consider the specific operations that these data structures require and their performance characteristics.

For stacks, an array-based implementation offers simplicity and direct access with O(1) time complexity for push and pop operations. Arrays are memory efficient with low overhead compared to linked lists. However, arrays have fixed sizes, and resizing dynamic arrays can be costly with O(n) time complexity, potentially causing performance issues. Conversely, a linked list-based stack implementation allows dynamic sizing, easily growing and shrinking as needed without resizing. It offers O(1) time complexity for push and pop operations, but each element requires additional memory for the pointer to the next element, leading to more memory consumption and slower access times with O(n) complexity when accessing elements by index.

For queues, an array-based implementation is simple to implement and provides fast O(1) access times. However, it also shares the fixed-size limitation and resizing issues of stacks. Implementing a circular buffer can address some of these issues but adds complexity. A linked list-based queue implementation, on the other hand, excels with its dynamic size and O(1) time complexity for enqueue and dequeue operations. It uses more memory due to the pointer for each element, resulting in slower O(n) access times for indexed elements.

In summary, array-based implementations are often preferred for their simplicity and performance when the size can be estimated or managed with dynamic arrays. Linked list-based implementations are advantageous when dynamic sizing is required, and they avoid the overhead of resizing but at the cost of increased memory usage and slower indexed access. For stacks, arrays are typically more efficient unless dynamic resizing is a major concern. For queues, linked lists are often more efficient due to their dynamic nature and efficient enqueue/dequeue operations.


------------------------------------------------------
Event Loop and Single Threaded behavior of Javascript
------------------------------------------------------


The event loop is a core part of JavaScript's runtime, essential for handling asynchronous operations in its single-threaded environment. JavaScript operates in a single-threaded manner, meaning it can execute only one piece of code at a time. This behavior is managed through the event loop, which allows JavaScript to perform non-blocking operations despite being single-threaded.

When JavaScript code is executed, it starts in the call stack, a structure that tracks function calls. Synchronous code runs directly in the call stack, executing line by line. If the code encounters an asynchronous operation, such as a timer, network request, or event handler, the operation is delegated to the Web APIs (provided by the browser) or Node.js APIs (in a server environment). These APIs handle the asynchronous tasks outside the main thread.

Once an asynchronous task is completed, a callback function associated with the task is placed in the task queue. The event loop continuously monitors the call stack and the task queue. When the call stack is empty, indicating that all synchronous code has been executed, the event loop picks the first callback from the task queue and pushes it onto the call stack for execution. This process ensures that the non-blocking behavior of JavaScript is maintained, allowing it to handle multiple tasks efficiently.

Promises and microtasks are a more recent addition to the JavaScript event loop. Microtasks, such as promise callbacks, have a higher priority and are executed before regular task queue callbacks. When a promise is resolved, its then or catch callback is placed in the microtask queue, which the event loop checks after the current task execution and before moving to the next task in the task queue.

In summary, the event loop enables JavaScript's single-threaded environment to handle asynchronous operations by offloading tasks to external APIs and using queues to manage callbacks. This ensures that JavaScript remains responsive and efficient, executing one piece of code at a time while seamlessly managing asynchronous events.
*/ 