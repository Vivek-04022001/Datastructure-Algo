// common in-built methods in arrays in javascript


/*
Notes
1. 4 bites of storage of each array element
2. splice method paramters :
    splice(start)
    splice(start, deleteCount)
    splice(start, deleteCount, item1)
3. loopup : O(1) but push, insert, delete has O(n)    
4. Javascript has dynamic array: basically automatically create size according to our need. But not in languages like C++
5. In static arrays, append element is O(n) as compared to dyanmic array in case of Javacript.

*/

const strings = ["a", "b", "c", "d"];
const numbers = [1, 2, 3, 4, 5];

// to access the element
console.log(strings[1]);

//push : add element at last O(1)
strings.push("e");
// [a,b,c,d,e]

//pop : remove element at last O(1)
strings.pop();
// [a,b,c,d]
strings.pop();
// [a,b,c]

//unshift : add element at start O(n)
strings.unshift("x");
// [x,a,b,c]

//splice O(n)
strings.splice(2, 0, "alien");

console.log(strings);
