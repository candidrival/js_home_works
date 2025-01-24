function analyzeArray(numbers) {
    if (numbers.length === 0) {
        return {
            sum: 0,
            average: 0,
            min: null,
            max: null
        };
    }

    const sum = numbers.reduce((total, num) => total + num, 0);
    const average = sum / numbers.length;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    return { sum, average, min, max };
}

const array = [1, 2, 3, 4, 5];
const result = analyzeArray(array);

console.log("Array with analyze:", result);
