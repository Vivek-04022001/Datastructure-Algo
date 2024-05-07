/*
Easy 
Count Maximum Consecutive One's in the array


Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.

Examples:

Example 1:

Input: prices = {1, 1, 0, 1, 1, 1}

Output: 3

Explanation: There are two consecutive 1’s and three consecutive 1’s in the array out of which maximum is 3.

Input: prices = {1, 0, 1, 1, 0, 1} 

Output: 2

Explanation: There are two consecutive 1's in the array. 

*/

function findMaxConsecutiveOnes(nums) {
  let maxConsecutiveOnes = 0;
  let currentMaxConsectiveOnes = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentMaxConsectiveOnes++;
      maxConsecutiveOnes = Math.max(maxConsecutiveOnes, currentMaxConsectiveOnes);
    } else {
      currentMaxConsectiveOnes = 0;
    }
  }

  return maxConsecutiveOnes
}

console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))