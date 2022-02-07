var removeDuplicates = function (nums) {
    // console.log(Array.from(new Set(nums)));
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1);            
        }
    }
    // return nums;    
};
