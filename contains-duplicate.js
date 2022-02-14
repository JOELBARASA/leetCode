var containsDuplicate = function (nums) {
    console.log(nums);
    if (!Array.isArray(nums)) {
        return -1;
    }
    else {
        let setNumbers = new Set(nums);
        return nums.length === setNumbers.size ? false : true;
    }
};
