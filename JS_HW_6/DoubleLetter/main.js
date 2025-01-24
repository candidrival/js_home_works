function doubleLetter(str) {
    return str.split('').map(char => char + char).join('');
}

const userInput = prompt("Input word:");
const result = doubleLetter(userInput);

console.log("Result:", result);