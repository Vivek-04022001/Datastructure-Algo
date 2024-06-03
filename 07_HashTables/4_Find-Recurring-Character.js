/*
Initialize an empty object obj.

Iterate over the array nums using a for loop.

For each element in nums, check if it already exists as a key in obj:

If it does, that means it's a recurring character, so return it immediately.
If it doesn't, add it to obj as a key with the value true.
If the function finishes iterating over nums without finding a recurring character, return undefined.

This function uses an object to keep track of the characters it has seen so far, which allows it to find the first recurring character in O(n) time, where n is the length of nums.

Time Complexity : O(n)
*/

function findRecurringCharacter(nums) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      return nums[i];
    }
    obj[nums[i]] = true;
  }

  return undefined;
}

console.log(findRecurringCharacter([99, 5, 5, 1, 99, 3, 5, 1, 99, 4]));
