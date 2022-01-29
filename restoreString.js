/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 
 var restoreString = function (s, indices) {
    if (!Array.isArray(indices) || (s.length !== indices.length)) {
        return "\nInvalid Operators. Operation not allowed!\n"
    }
    else {
        let restoredString = new Array();
        for (let i = 0; i < indices.length; i++) {
            restoredString[indices[i]] = s[i];
        }
        // console.log(restoredString.toString());
        return restoredString.join('');        
    }
};

// var restoreString = function (s, indices) {
//     console.log(s);
//     console.log(indices);
//     if (!Array.isArray(indices) || (s.length !== indices.length)) {
//         return "\nInvalid Parameters!!!\n";
//     }
//     else {
//         let shuffledString = "";
//         let shuffledMap = new Map();
//         for (let i = 0; i < indices.length; i++) {
//             shuffledMap.set(indices[i], s.charAt(i));
//         }        
//         let index = 0;
//         while (index < indices.length) {
//             shuffledString += shuffledMap.get(index);
//             index++;
//         }
//         console.log(shuffledString);
//         return shuffledString;
//     }
// };

// var restoreString = function(s, indices) {
//         let output = []
//     for(let i = 0; i < indices.length; i++){
//       output[indices[i]] = s[i]
//     }
//     return output.join('')
// };
