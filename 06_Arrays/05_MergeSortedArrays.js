// MergeSortedArrays([0,3,4,31],[4,6,30])

function mergedSortedArray(array1, array2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;
  
    // comparing between 2 arrays only happen until if there is any element inside the array. if there is no element the comparing will be stop
    while (i < array1.length && j < array2.length) {
      if (array1[i] <= array2[j]) {
        mergedArray.push(array1[i]);
        i++;
      } else {
        mergedArray.push(array2[j]);
        j++;
      }
    }

    // Here, if there is anyone array which has no element left to compare, while loop than push the elments from the other array to the merged array
    while(i < array1.length){
        mergedArray.push(array1[i])
        i++
    }
    while(j< array2.length){
        mergedArray.push(array2[j])
        j++
    }
  
  
    return mergedArray;
  }

// console.log(sortAnArray([5, 4, 2, 1]));
console.log(mergedSortedArray([0, 3, 4, 31], [4, 6, 30]));
