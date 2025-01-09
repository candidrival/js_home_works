function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-zа-яёїієґ0-9]/gi, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

const userInput = prompt("Введіть рядок для перевірки:");
if (userInput) {
    if (isPalindrome(userInput)) {
        console.log(`"${userInput}" є паліндромом.`);
    } else {
        console.log(`"${userInput}" не є паліндромом.`);
    }
} else {
    console.log("Ви не ввели жодного рядка.");
}