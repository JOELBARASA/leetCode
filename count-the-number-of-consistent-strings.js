/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    console.log(allowed);
    console.log(words);

    /*
    1. Iterate thro' words array.
    2. check if each word segment in array is contained in allowed set.
    3. Engine:
       If all contained increment similarityCounter by 1.
       else
       skip to the next one
     4. Return similarityCounter
    */
    if (typeof allowed !== 'string' || !Array.isArray(words)) {
        return "Invalid Parameters!";
    }
    else {
        let totalConsistent = 0;
        continueLabel: for (let i = 0; i < words.length; i++) {
            let pos = 0;
            while (pos < words[i].length) {
                if (!allowed.includes(words[i].charAt(pos))) {
                    continue continueLabel;
                }
                pos++;
            }
            totalConsistent++;
        }
        return totalConsistent;
    }
};
