function findGCD(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}

const num1 = parseInt(prompt("Введіть перше число:"), 10);
const num2 = parseInt(prompt("Введіть друге число:"), 10);

if (!isNaN(num1) && !isNaN(num2)) {
    const gcd = findGCD(num1, num2);
    console.log(`НСД (${num1}, ${num2}) = ${gcd}`);
} else {
    console.log("Введені дані мають бути числами.");
}