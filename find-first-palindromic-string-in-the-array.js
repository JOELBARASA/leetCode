/**
 * @param {string[]} words
 * @return {string}
 */

var firstPalindrome = function (words) {
    console.log(typeof words[0]);
    if (!Array.isArray(words)) {
        return -1;
    }
    else {
        for (let i = 0; i < words.length; i++) {
            if(isPalindrome(words[i], 0, words[i].length - 1) === true) {
                console.log(words[i]);
                return words[i];
            }
        }
        return "";
    }
};

var isPalindrome = function (word, startPos, endPos) {
    if (startPos >= endPos) {
        return true;
    }
    else if (word.charAt(startPos) !== word.charAt(endPos)) {
        return false;
    }
    else {
        return isPalindrome(word, startPos + 1, endPos - 1);
    }
};
