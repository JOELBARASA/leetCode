/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(!Array.isArray(nums) || typeof target !=='number'){
        return "\nInvalid Input!";
    }
    else{
        if(nums.includes(target)){
            return nums.indexOf(target);
        }
        else{
            let pos = 0;
            while(target > nums[pos]){
                pos++;
            }
            return pos;
        }
    }    
};
