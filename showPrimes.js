console.log('\n....SHOW PRIMES....\n');
console.log(showPrimes(20));
function showPrimes(range) {

    for (let number = 2; number <= range; number++) {
        let isPrime = true;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime === true) {
            console.log(number);
        }
    }
}