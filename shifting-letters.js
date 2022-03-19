/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
    // s = "aaa", shifts = [1,2,3];
    s = "bad", shifts = [10,20,30]; //"jyh"
    if (typeof s !== 'string' || !Array.isArray(shifts)) {
        return "\nInvalid entry...\n";
    }
    else {
        let arrayString = s.split('');
        console.log(arrayString);

        for (let index = 0; index < shifts.length; index++) {
            let valueOffset = shifts[index];
            let indexController = 0;
            while (indexController <= index) {
                arrayString[indexController] = String.fromCharCode(arrayString[indexController].codePointAt() + Number(valueOffset));
                console.log(arrayString);
                indexController++;
            }
        }
        return arrayString.join('');
    }
};
