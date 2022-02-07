/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    if (!Array.isArray(nums1) || !Array.isArray(nums2)) {
        return "\nInvalid Input. Entry not allowed!";
    }
    else {
        let mergedArray = nums1.concat(nums2).sort((a, b) => (a < b) ? -1 : 1);
        console.log(mergedArray);
        let medianValue = Math.ceil(mergedArray.length / 2);
        console.log(medianValue);
        if (mergedArray.length % 2 === 0) {
            return ((mergedArray[medianValue] + mergedArray[medianValue - 1]) / 2)
        }
        else {
            return mergedArray[medianValue - 1];
        }
    }
};
