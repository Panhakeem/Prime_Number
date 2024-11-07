// Students write their code between these lines. 
//
// Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
//
// Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
//
// Stuents should carefully read the test cases for the correct output. 
//

// Write isPrime(num), which returns true if the number is prime and false otherwise.
function checkPrimeNum(num) {
    if (num < 2) return `${num} is not prime`;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return `${num} is not prime`;
    }
    return `${num} is prime`;
}

function findPrimesInRange(range) {
    if (!Array.isArray(range) || range.length !== 2 || typeof range[0] !== 'number' || typeof range[1] !== 'number') {
        return messageFormatter("Invalid input. Please provide a number or a valid range (array of two numbers).");
    }
    const [start, end] = range;
    const primes = [];
    for (let i = start; i <= end; i++) {
        if (checkPrimeNum(i)) primes.push(i);
    }
    return messageFormatter([start, end], primes);
}

function messageFormatter(input, result = null) {
    if (typeof input === 'number') {
        return input + (checkPrimeNum(input) ? " is a prime number." : " is NOT a prime number.");
    }
    if (Array.isArray(input)) {
        return `Primes between ${input[0]} and ${input[1]}: [${result.join(", ")}]`;
    }
    return input; 
}

// Instructor's test cases
// ===== ===== ===== ===== =====

console.log(checkPrimeNum(2));
// Expected Output: 2 is a prime number.

console.log(checkPrimeNum(1));
// Expected Output: 1 is NOT a prime number.

console.log(checkPrimeNum(13));
// Expected Output: 13 is a prime number.

console.log(checkPrimeNum(25));
// Expected Output: 25 is NOT a prime number.

console.log(findPrimesInRange([10, 20]));
// Expected Output: Primes between 10 and 20: [11, 13, 17, 19]

console.log(findPrimesInRange([30, 50]));
// Expected Output: Primes between 30 and 50: [31, 37, 41, 43, 47]

console.log(findPrimesInRange('test'));
// Expected Output: Invalid input. Please provide a number or a valid range (array of two numbers).