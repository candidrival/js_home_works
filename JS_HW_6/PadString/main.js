function padString(str, length, symbol, toLeft = false) {
    if (str.length >= length) {
        return str;
    }

    const padding = symbol.repeat(length - str.length);

    return toLeft ? padding + str : str + padding;
}

const userStr = prompt("Input word:");
const userLength = parseInt(prompt("Input the length to which you want to extend the string:"), 10);
const userSymbol = prompt("Enter a character to complete:");
const userToLeft = confirm("Add characters on the left? Press OK to accept or Cancel to add on the right.");

const result = padString(userStr, userLength, userSymbol, userToLeft);

console.log("Result:", result);