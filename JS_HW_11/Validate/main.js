function validate(fn, validator) {
  return function(...args) {
    if (!args.every(validator)) {
      throw new Error(`Аргументи не пройшли валідацію: ${args}`);
    }
    return fn(...args);
  };
}

function sum(a, b) {
  return a + b;
}

const positiveValidator = (arg) => typeof arg === 'number' && arg > 0;

const validatedSum = validate(sum, positiveValidator);

console.log(validatedSum(2, 3));
console.log(validatedSum(4, 7));

try {
  console.log(validatedSum(-2, 3));
} catch (error) {
  console.error(error.message);
}

try {
  console.log(validatedSum(2, '3'))
} catch (error) {
  console.error(error.message);
}