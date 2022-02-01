/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
    if (typeof s !== 'string') {
        return "\nInput not allowed! Please pass a valid string parameter.\n"
    }
    else {
        let split = s.split(' ');
        console.log(split);
        let previous = 0;
        for (let i = 0; i < split.length; i++) {
            // console.log(split[i] + ': ' + isNaN(split[i]));
            if (isNaN(split[i]) === false) {
                if (split[i] - previous <= 0)
                    return false;
                previous = split[i];
            }
        }
        return true;
    }
};
// var areNumbersAscending = function (s) {
//     if (typeof s !== 'string') {
//         return false;
//     }
//     else {
//         console.log(s);
//         let comparativeArray = new Array();
//         let splitSentence = s.split(' ');
//         for (let i = 0; i < splitSentence.length; i++) {
//             if (isNaN(parseInt(splitSentence[i])) === false) {
//                 console.log(parseInt(splitSentence[i]));
//                 comparativeArray.push(parseInt(splitSentence[i]));
//             }
//         }

//         if (comparativeArray.length < 2) {
//             return false;
//         }
//         else {
//             for (let i = 0; i < comparativeArray.length; i++) {
//                 if (comparativeArray[i] - comparativeArray[i + 1] >= 0) {
//                     return false;
//                 }
//             }
//             return true;
//         }
//     }
// };
