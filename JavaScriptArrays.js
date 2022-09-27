const courseCode = [2, 3];
//Add elements
console.log('\n...ADD ELEMENTS TO AN ARRAY...\n');
//1. At the end
courseCode.push(4, 5, 2);
//1. At the Beginning
courseCode.unshift(0, 1);
//1. At the MIddle
courseCode.splice(2, 0, 'a', 'b');
console.log(courseCode);

console.log('\n...FIND ELEMENTS IN AN ARRAY...\n');
console.log(courseCode.indexOf(2));

console.log(courseCode.lastIndexOf(2));

let courses = [
    { id: 1, name: 'Computer Science' },
    { id: 2, name: 'Software Engineering' },
    { id: 3, name: 'Law and Order' },
    { id: 4, name: 'Artificial Intelligence' },
    { id: 5, name: 'Discrete Mathematics' },
    { id: 6, name: 'Polynomials' }
];
console.log(courses.filter(x => x.id > 2));
console.log(courses.find(course => course.name = 'Artificial Intelligence'));
console.log(courseCode.slice(3, 5));
const newNumbers = [1, 2, 3, 4, 5];
let joined = newNumbers.join(',');
console.log(joined)
console.log(typeof joined);

console.log('\n..........CREATE ARRAYS FROM RANGE....\n');
const arrayNumbers = arrayFromRange(1, 6);
console.log(arrayNumbers);

function arrayFromRange(min, max) {
    var populatedArray = new Array();
    for (let index = min; index <= max; index++) {
        populatedArray.push(index);
        // populatedArray[index] = index;  
    }
    return populatedArray;
}


console.log('\n..........CHECK IF ARRAY INCLUDES....\n');
console.log(arrayIncludes(40))

function arrayIncludes(value) {
    let numbersArray = [10, 2, 6, 7, 15, 4];
    for (const number of numbersArray) {
        if (number === value) {
            return true;
        }
    }
    return false;
}


console.log('\n..........EXCEPT....\n');
const firstArray = [1, 2, 3, 4, 5, 6, 3, 4];
const SecondArray = [3, 4]
console.log(except(firstArray, SecondArray));
function except(a, b) {
    for (let index = 0; index < a.length; index++) {
        for (let key = 0; key < b.length; key++) {
            if (a[index] === b[key]) {
                a.splice(index, 1);
            }

        }

    }
    return a;
}

console.log('\n..........GET MAXIMUM VALUE....\n');
const values = [1, 2, 12, 3, 4, 5, 6, 3, 4];
console.log(getMaximum(values))
function getMaximum(values) {
    return values.reduce((a, b) => (a > b) ? a : b); //Option 1
    // return Math.max(...values); //Option 2
}
