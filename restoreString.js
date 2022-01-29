/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    console.log(s);
    console.log(indices);
    if (!Array.isArray(indices) || (s.length !== indices.length)) {
        return "\nInvalid Parameters!!!\n";
    }
    else {
        let shuffledString = "";
        let shuffledMap = new Map();
        for (let i = 0; i < indices.length; i++) {
            shuffledMap.set(indices[i], s.charAt(i));
        }        
        let index = 0;
        while (index < indices.length) {
            shuffledString += shuffledMap.get(index);
            index++;
        }
        console.log(shuffledString);
        return shuffledString;
    }
};
