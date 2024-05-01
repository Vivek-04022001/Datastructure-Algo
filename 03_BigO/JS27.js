// Big O

// -----------------------------
// Lecture 30. What is Good code!
// -----------------------------
// const nemo = ["nemo1"];

// function findNemo(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "nemo") console.log("Found NEMO!");
//     else console.log("not found nemo!");
//   }
// }
// findNemo(nemo);

// ------------------------------
// Lecture 31. Big O and Scalabity
// ------------------------------

// const nemo = ["nemo"];

// const largeArray = new Array(800).fill("vivek");
// largeArray.push('nemo');


// function findNemo(array) {
//   let t0 = performance.now();
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "nemo") console.log("Found NEMO!");
   
//   }
//   let t1 = performance.now();
//   console.log("Call to find Nemo took " + (t1 - t0) + "milliseconds");
// }

// findNemo(nemo);
// findNemo(largeArray);

// ------------------
// Lecture 32. Big O 
// ------------------

// const nemo = ["nemo"];

// const largeArray = new Array(800).fill("vivek");
// largeArray.push('nemo');


// function findNemo(array) {
//   let t0 = performance.now();
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "nemo") console.log("Found NEMO!");
   
//   }
//   let t1 = performance.now();
//   console.log("Call to find Nemo took " + (t1 - t0) + "milliseconds");
// }

// findNemo(nemo);
// findNemo(largeArray);

// The number of operations increases linearly with the number of elements in the array. Therefor the time complexity of this function is O(n) where n is the number of elements in the array.
// linear time complexity (linear time) : O(n) 


// ------------------------------
// Lecture 33. O(1) Constant Time    
// ------------------------------
// const boxes=[1,2,3,4,5,6];
// const largeBoxes=new Array(1000).fill([1]);


// function logFirstTwoBoxes(boxes){
//     console.log(boxes[0])
//     console.log(boxes[1])
// }

// logFirstTwoBoxes(boxes)
// logFirstTwoBoxes(largeBoxes)


// -----------------------------
// Lecture 34. Big O Calculation    
// -----------------------------

let input = [0,1,2,3,4,5]

function funChallenge(input){
    // these operations doesn't depend upon the length of array O(1)
    let a = 10
    a = 50+3;

    // operation depends upon the length of array O(n)
    for(let i=0; i<input.length;i++){
        
        // if input -> 1 ; operation -> 3
        // if input -> 2 ; operation -> 6
        // if input -> n ; operation -> 3n
        // therefore time complexity for n input -> 3n
        // but we have to ignore the constant which is 3
        // therefor we can say that n input takes n operations
        //  time complexity will O(n) 
        anotherFunction();
        let stranger = true;
        a++
    }

    // single operation which doesn't not depent upon the length of input. Therefore the time complexity will also be same O(1)
    return a;
}


// Time complexity of above function will O(1)+ O(n)+ O(1)

// -------------------------------
// Lecture 35. Big O Calculation 2    
// -------------------------------


function anotherFunction(input){
    // O(1)
    let a = 5;
    let b = 10
    let c = 50

    // O(n)
    for(let i=0;i<input;i++){
        let x = i + 1; 
        let y = i + 2; 
        let z = i + 3; 
    }
    
    // O(n)
    for (let j = 0; j < input; j++) { 
        let p = j * 2; 
        let q = j * 2;  
      }
    // O(1)  
      let whoAmI = "I don't know"; 
}

// Total time complexity will be : O(1+1+n+n)
// Effective time complexity is the rate of operation change according to the input size 
// here we can see that we can easily ignore O(2+2n) -> O(n)
// Therefore the time complexity of this function is same as above function which is O(n)

// ----------------------------------
// Lecture 39,40,41. Big O Rule 1,2,3    
// ----------------------------------

/*
rule 1 : Worst Case
rule 2 : Remove Constants
rule 3 : Different terms for inputs
    O(n+m)
rule 4 : Drop Non Dominants
*/ 

// ------------------
// Lecture 42. O(n^2)    
// ------------------

/*

-simply means nested loops has Big O (n^2). If one loop is nested.

- nested loops considered multiplication.

*/ 

// ------------------
// Lecture 43. rule 4    
// ------------------

/*

- drop non dominant terms means
- O(n+ n^2 + 2^n) = O(2^n)

*/ 