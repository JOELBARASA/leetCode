/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    let valueIndex;
    if (ruleKey === 'type') {
        valueIndex = 0;
    }
    else if (ruleKey === 'color') {
        valueIndex = 1;
    }
    else {
        valueIndex = 2;
    }
    return items.filter(value => (value[valueIndex] === ruleValue)).length;
};
