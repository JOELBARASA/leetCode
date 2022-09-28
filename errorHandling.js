console.log('\n....ERROR HANDLING...\n');

function toUpperCase(value) {
    if (typeof value !== 'string' || value.length < 2) {
        const e = new TypeError();
        throw new TypeError('\nWrong entry. Only valid strings allowed! \n');
    }
    else {
        return value.toUpperCase();
    }
}


try {
    console.log(toUpperCase('rio'));

} catch (e) {
    console.log(e.message)

}
