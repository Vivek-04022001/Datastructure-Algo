
function findRecurringCharacter(nums){
    let obj = {}
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]){
            return nums[i]
        }
        obj[nums[i]] = true;
    }
    return undefined;

}

console.log(findRecurringCharacter([99, 5, 5, 1, 99, 3, 5, 1, 99, 4]));
