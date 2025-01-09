function isPerfect(num) {
    let sum = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum === num;
}

function findPerfectNumbers(N) {
    const perfectNumbers = [];

    for (let i = 1; i <= N; i++) {
        if (isPerfect(i)) {
            perfectNumbers.push(i);
        }
    }

    return perfectNumbers;
}

const input = prompt("Введіть число N:");
const number = parseInt(input, 10);

if (!isNaN(number) && number > 0) {
    const perfectNumbers = findPerfectNumbers(number);

    if (perfectNumbers.length > 0) {
        console.log(`Досконалі числа в діапазоні від 1 до ${number}: ${perfectNumbers.join(", ")}`);
    } else {
        console.log(`У діапазоні від 1 до ${number} немає досконалих чисел.`);
    }
} else {
    console.log("Будь ласка, введіть коректне додатнє число.");
}