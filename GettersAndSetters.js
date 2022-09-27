console.log('\n.....Getters and Setters....\n');
let person = {
    // firstName: 'Joel',
    // lastName: 'Barasa',
    get fullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

person.fullName = 'Kelsey Israel';
console.log(person);
