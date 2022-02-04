/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
    console.log(colors);
    if (!Array.isArray(colors) || colors.length < 2) {
        return 0;
    }
    else {
        let maxDistance = 0;
        for (let i = 0; i < colors.length; i++) {
            for (let j = i + 1; j < colors.length; j++) {
                if (colors[i] !== colors[j] && (j - i) > maxDistance) {
                    maxDistance = j - i;
                }
            }
        }
        return maxDistance;
    }
};
