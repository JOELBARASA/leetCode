/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let map = new Map();
    var i = 0;
    var result = 0;
    var maxFreq = 0;
    for (var j = 0; j < s.length; j++) {
        var ch = s.charAt(j);
        map.set(ch, (map.get(ch) ?? 0) + 1);
        maxFreq = Math.max(maxFreq, map.get(ch));
        var windowSize = j - i + 1;
        if (windowSize - maxFreq <= k) {
            result = Math.max(result, windowSize);
        } else {
            var leftChar = s.charAt(i);
            map.set(leftChar, (map.get(leftChar) ?? 0) - 1);
            i++;
        }
    }
    return result;
};
