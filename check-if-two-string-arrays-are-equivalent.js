/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    if(!Array.isArray(word1) || !Array.isArray(word2)){
        return "\nInvalid Inputs! Please pass valid string arrays";
    }
    else{
        return word1.join('').toLowerCase() === word2.join('').toLowerCase();
    }    
};
