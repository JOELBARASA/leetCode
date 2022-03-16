/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
    let result = "";
    const length = s.length;
    for (let i = 0; i < length; i += 2) {
        result += s[i] + (i < length - 1 ? String.fromCharCode(Number(s[i].charCodeAt()) + Number(s[i + 1])) : " ");
    }
    console.log(result);
    return result;

};
