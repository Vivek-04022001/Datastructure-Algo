// MergeSortedArrays([0,3,4,31],[4,6,30])

function mergedSortedArray(array1, array2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;
  
    while (i < array1.length && j < array2.length) {
      if (array1[i] <= array2[j]) {
        mergedArray.push(array1[i]);
        i++;
      } else {
        mergedArray.push(array2[j]);
        j++;
      }
    }

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
