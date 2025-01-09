function reverseString(str) {
    return str.split('').reverse().join('');
}

const userInput = prompt("Введіть слово для обробки:");
if (userInput) {
    const reversed = reverseString(userInput);
    console.log(`Оригінальне слово: ${userInput}`);
    console.log(`Перевернуте слово: ${reversed}`);
} else {
    console.log("Ви не ввели жодного слова.");
}