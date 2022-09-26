console.log('\n.....OBJECTS..........\n');
let person = {
    name: 'Rio',
    gender: 'Male',
    location: {
        x: 1,
        y: 3
    },
    age: 6,
    draw: function () {
        console.log('Welcome RIO...')
    },
    religion: 'Christian'
}

console.log(person);



console.log('\n.....FACTORY FUNCTIONS.....\n');
let school1 = createSchool('Grassland', 'Trans-Nzoia', 'Elementary');
let school2 = createSchool('FSK', 'BUNGOMA', 'Secondary');
console.log(school1);
console.log(school2.draw());
function createSchool(name, county, classification) {
    return {
        schoolName: name,
        location: county,
        category: classification,
        draw() {
            console.log('School creation complete!');
        }
    }

}


console.log('\n........CONSTRUCTOR FUNCTIONS.....\n');
function facility(name, type, id) {
    this.name = name;
    this.type = type;
    this.number = id,
        this.draw = function (id) {
            console.log('...New Facility created: ' + id)
        }

}


let loanOne = new facility('CAR LOAN', 'ASSSET FINANCE', 12345);
let loanTwo = new facility('MORTGAGE', 'SECURED LOAN', 12345);

console.log(loanOne);
console.log(loanTwo)
console.log(loanOne.draw());


console.log('\n.....Dynamic Nature of Objects....\n');
let circle = {
    radius: 7,
    draw() {
        console.log('DRAW');
    }
};
circle.type = 'Sketch';
circle.color = 'Yellow';
// delete circle.radius;
console.log(circle);
console.log('\nITERATING THROUGH PROPERTIES OF AN OBJECT')
for (let key in circle) {
    console.log(key, circle[key]);
}

console.log('\nITERATING THROUGH PROPERTIES OF AN OBJECT ....2')
for (let iterator of Object.keys(circle)) {
    console.log(iterator)
}

console.log('\nITERATING THROUGH PROPERTIES OF AN OBJECT ....3')
for (let iterator of Object.entries(circle)) {
    console.log(iterator);
}

console.log('\ncheck if a property exists in AN OBJECT ....')
if ('radius' in circle) {
    console.log('YES');
}
else {
    console.log('NO');
}
let anotherCircle = {};

console.log('\nCLONNING AN OBJECT ....');

for (let key in circle) {
    anotherCircle[key] = circle[key];
}
console.log(anotherCircle);

console.log('\nCLONNING AN OBJECT ....2');
let newCircle = Object.assign({ pie: 22 / 7 }, circle);
console.log(newCircle);

console.log('\nCLONNING AN OBJECT ....3');
let clonedCircle = { ...facility, ...circle };
console.log(clonedCircle);
