/*
Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
 

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

// brute force
// time complexity : O(n^2)
function MaximumSubarray(nums) {
    // Initialize maximumSum with the first element of the array
    let maximumSum = nums[0];
  
    // Iterate over the array
    for (let i = 0; i < nums.length; i++) {
      // Initialize the current sum
      let currentSum = 0;
  
      // Calculate the sum of the subarray starting at index i
      for (let j = i; j < nums.length; j++) {
        currentSum += nums[j];
  
        // If the current sum is greater than or equal to the maximum sum, update the maximum sum
        if (currentSum >= maximumSum) {
          maximumSum = currentSum;
        }
      }
    }
  
    // Return the maximum sum of any subarray
    return maximumSum;
  }

// Kadane's algorithm
// Time complexity: O(n)
function MaximumSubarray2(nums) {
    let currentSum = nums[0];
    let maximumSum = nums[0];

    for(let i = 1; i < nums.length; i++) {
        // If currentSum becomes negative, reset it to the current number
        currentSum = Math.max(nums[i], currentSum + nums[i]);

        // If currentSum is greater than maximumSum, update maximumSum
        maximumSum = Math.max(maximumSum, currentSum);
    }

    return maximumSum;
}
