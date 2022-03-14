/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {   
    /**
    1. Iterate through stones      
       check if stones entities exist in jewels. If exists incremement counter
       return totalCount;
    */
    let totalNumber = 0;    
    for (let i = 0; i < stones.length; i++) {
        for (let j = 0; j < jewels.length; j++) {
            if (stones[i] === jewels[j]) {
                totalNumber++;               
            }
        }
    }
    return totalNumber;
};
