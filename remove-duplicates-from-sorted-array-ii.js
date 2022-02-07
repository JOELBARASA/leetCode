/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] === nums[i + 1] && (nums.filter(x => x === nums[i]).length > 2)) {
      nums.splice(i + 1, 1);
    }
  }
};
