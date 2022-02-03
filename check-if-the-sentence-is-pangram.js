/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    if(typeof sentence !=='string'){
        return -1;
    }
    else {
        let sentenceMapper = new Set(sentence.toLowerCase());   
        return sentenceMapper.size === 26;        
    }
};
