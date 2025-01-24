function reverseArray(arr) {
    return arr.slice().reverse();
}

// Приклад використання
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);

console.log("Original array:", originalArray);
console.log("Reversed array:", reversedArray);