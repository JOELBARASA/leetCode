/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    console.log(s); console.log(t);
    let ss = s.split('').sort((a, b) => a < b? -1: 1).join('');
    let tt = t.split('').sort((a, b) => a < b? -1: 1).join('');
    return ss === tt ? true : false;
};
