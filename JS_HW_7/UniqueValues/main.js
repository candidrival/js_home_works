function uniqueValues(arr1, arr2) {
    const combinedArray = [...arr1, ...arr2];
    return [...new Set(combinedArray)];
}

// Приклад використання
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const uniqueArray = uniqueValues(array1, array2);

console.log("Unique values:", uniqueArray);