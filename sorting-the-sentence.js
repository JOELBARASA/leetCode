/**
 * @param {string} s
 * @return {string}
 */
var areNumbersAscending = function (s) {
    const split = s.split(' ');
    let current = 0;
    console.log(split);

    for (let i = 0; i < split.length; i++) {
        const iValue = parseInt(split[i]);  
        if (isNaN(iValue) === false) {           
            if (iValue <= current) return false;
            current = iValue;
        }
    }
    return true;
};
// var sortSentence = function (s) {
//     console.log(s);
//     if (typeof s !== 'string' || s.length === 0) {
//         return "\nInvalid Entry!";
//     }
//     else {

//         let unOrderedSentence = s.split(' ');
//         let orderedSentence = new Array();
//         console.log(unOrderedSentence);
//         for (let i = 0; i < unOrderedSentence.length; i++) {
//             let strPos = unOrderedSentence[i].slice(-1);
//             let strValue = unOrderedSentence[i].substring(0, unOrderedSentence[i].indexOf(strPos));
//             orderedSentence[strPos] = strValue;
//         }
//         console.log(orderedSentence);
//         return orderedSentence.join(' ').trim();
//     }
// };
