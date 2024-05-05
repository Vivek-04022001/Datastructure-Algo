/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

*/

// The twoSum function takes an array of integers and a target integer
// It returns an array of two indices whose elements sum up to the target
function twoSum(nums, target) {
    // Create an empty object to store the numbers from the array as keys and their presence as values
    let numIndices = {};
  
    // Iterate over the nums array
    for(let i = 0; i < nums.length; i++) {
      // Calculate the complement of the current number (i.e., target - current number)
      let complement = target - nums[i];
  
      // If the complement is not found in numIndices, it means we haven't encountered a number that can sum with nums[i] to give the target
      // So, we skip to the next iteration
      if(numIndices[complement] !== true) {
        continue;
      }
  
      // If the complement is found in numIndices, return the indices of the complement and the current number
      return [nums.indexOf(complement), i];
  
      // Add the current number to numIndices with a value of true to indicate we've encountered this number
      numIndices[nums[i]] = true;
    }
  }
console.log(twoSum([2, 7, 2, 11, 15], 9));

/*
Step-by-step thinking process:

Create an empty object numIndices to store the numbers we've encountered in the nums array.
Iterate over the nums array.
For each number, calculate its complement with respect to the target (i.e., target - nums[i]).
Check if the complement exists in numIndices. If it does, it means we've found two numbers that sum up to the target, so we return their indices.
If the complement does not exist in numIndices, it means we haven't yet encountered a number that can sum with nums[i] to give the target. So, we add nums[i] to numIndices and continue to the next iteration.
Repeat steps 3-5 for all numbers in the nums array.

*/ 