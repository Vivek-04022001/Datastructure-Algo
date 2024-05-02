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
const array2 = ["z", "y,", "a"];

function isSimilarElementsExists(array1, array2) {
  // convert the array1 to the corresponding obj.
  let map = {};
  for (let i = 0; i < array1.length; i++) {
    if (!map[array1[i]]) {
      const item = array1[i];
      map[item] = true;
    }
  }
  console.log(map);

  // compare the new object with second array
  for (let j = 0; j < array2.length; j++) {
    if (map[array2[j]]) {
      return true;
    }
  }
  return false;
}

const result = isSimilarElementsExists(array1, array2);
console.log(result);
