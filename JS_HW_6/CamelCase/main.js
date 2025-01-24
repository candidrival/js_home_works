function camelCase(str, separator) {
    return str
        .split(separator)
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

const userStr = prompt("Input the string to convert:");
const userSeparator = prompt("Input a separator (for example, a space, '_', or '-'):");
const result = camelCase(userStr, userSeparator);

console.log("The result is in the camelCase format:", result);