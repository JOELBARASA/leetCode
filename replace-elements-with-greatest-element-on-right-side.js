/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    if (!Array.isArray(arr)) {
        return -1;
    }
    else if (arr.length < 2) {
        return [-1];
    }
    else {
        let maximumValue;
        for (let i = 0; i < arr.length; i++) {
            // maximumValue = Math.max(...arr.slice(i + 1, arr.length));
            maximumValue = i < arr.length - 1 ? Math.max(...arr.slice(i + 1, arr.length)) : -1;
            arr[i] = maximumValue;
        }
        return arr;
    }    
};
