/*
Medium Level

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
*/

function singleNumber(nums) {
  let myMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (myMap[nums[i]] >= 0) {
      myMap[nums[i]]++;
    } else {
      myMap[nums[i]] = 0;
    }
  }
  for (let key in myMap) {
    if (myMap[key] === 0) {
      console.log(key);
      return key;
    }
  }
}

singleNumber([4, 1, 2, 1, 2]);
