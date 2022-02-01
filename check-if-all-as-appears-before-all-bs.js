/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
    console.log(s);
    let previous = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.codePointAt(i) - previous < 0)
            return false;
        previous = s.codePointAt(i);
    }
    return true;
};
