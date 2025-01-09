function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function checkPrimeNumber(N) {
    if (isPrime(N)) {
        console.log(`Число ${N} є простим числом.`);
    } else {
        console.log(`Число ${N} не є простим числом.`);
    }
}

const input = prompt("Введіть число:");
const number = parseInt(input, 10);

if (!isNaN(number)) {
    checkPrimeNumber(number);
} else {
    console.log("Будь ласка, введіть коректне число.");
}