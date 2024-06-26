// ----------------------------------
// 57. Exercise : Interview Questions
// ----------------------------------

/*
question: given 2 arrays, create a function that let's a user know whether these two arrays contain any common items
const array1= [a,b,c,d,e]
const array2 = [z,y,i]
should return false
*/

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y,", 1];

function isSimilarElementsExists(array1, array2) {
  let map = {};
  for (let i = 0; i < array1.length; i++) {
    if (!map[array1[i]]) {
      let item = array1[i];
      map[item] = true;
    }
  }
  for (let j = 0; j < array2.length; j++) {
    if (map[array2[j]]) return true;
  }

  return false;
}

const result = isSimilarElementsExists(array1, array2);
console.log(result);

// More readable way to write this similar code , but this would more language specific

function checkForSimilarElements(array1, array2){
  return array1.some(item => array2.include(item))
}
