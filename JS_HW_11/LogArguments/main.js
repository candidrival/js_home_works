function logArguments(fn) {
  return function(...args) {
    console.log(`Виклик функції ${fn.name} з аргументами:`, args);
    return fn(...args);
  };
}

function sum(a, b) {
  return a + b;
}

const loggedSum = logArguments(sum);

console.log(loggedSum(2, 3));

function multiply(...numbers) {
  return numbers.reduce((acc, num) => acc * num, 1);
}

const loggedMultiply = logArguments(multiply);

console.log(loggedMultiply(2, 3, 4));