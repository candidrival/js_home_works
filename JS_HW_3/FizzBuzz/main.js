const enterNumber = +prompt('Enter number:');


if (enterNumber % 3 === 0 && enterNumber % 5 === 0) {
    console.log("FizzBuzz");
} else if (enterNumber % 3 === 0) {
    console.log("Fizz");
} else if (enterNumber % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(enterNumber);
}