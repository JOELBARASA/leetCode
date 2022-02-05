var maximumDifference = function (nums) {
    // nums = [9,4,3,2];
    if (!Array.isArray(nums) || nums.length < 2) {
        return -1;
    }
    else {
        console.log(nums);
        let difference = -1;
        let minIndex = 0;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] < nums[minIndex]) minIndex = i;
            if (nums[i] - nums[minIndex] > difference && (nums[i] > nums[minIndex])) {
                difference = nums[i] - nums[minIndex];
            }
        }
        return difference;
    }
};
