/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    console.log(s);
    if (typeof s !== 'string' || s.length === 0) {
        return "\nInvalid Entry!";
    }
    else {

        let unOrderedSentence = s.split(' ');
        let orderedSentence = new Array();
        console.log(unOrderedSentence);
        for (let i = 0; i < unOrderedSentence.length; i++) {
            let strPos = unOrderedSentence[i].slice(-1);
            let strValue = unOrderedSentence[i].substring(0, unOrderedSentence[i].indexOf(strPos));
            orderedSentence[strPos] = strValue;
        }
        console.log(orderedSentence);
        return orderedSentence.join(' ').trim();
    }
};
