function capitalizeStrings(strings) {
    return strings.map(str => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
}

const inputStrings = ["hello", "world", "JAVASCRIPT", "cOdInG"];
const capitalizedStrings = capitalizeStrings(inputStrings);

console.log("Capitalize strings:", capitalizedStrings); 