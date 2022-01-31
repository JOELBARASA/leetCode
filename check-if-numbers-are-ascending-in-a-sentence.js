/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
    if (typeof s !== 'string') {
        return false;
    }
    else {
        console.log(s);
        let comparativeArray = new Array();
        let splitSentence = s.split(' ');
        for (let i = 0; i < splitSentence.length; i++) {
            if (isNaN(parseInt(splitSentence[i])) === false) {
                console.log(parseInt(splitSentence[i]));
                comparativeArray.push(parseInt(splitSentence[i]));
            }
        }

        if (comparativeArray.length < 2) {
            return false;
        }
        else {
            for (let i = 0; i < comparativeArray.length; i++) {
                if (comparativeArray[i] - comparativeArray[i + 1] >= 0) {
                    return false;
                }
            }
            return true;
        }
    }
};
