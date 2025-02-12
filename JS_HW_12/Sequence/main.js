function sequence(...fns) {
  return function(initialValue) {
    return fns.reduce((result, fn) => fn(result), initialValue);
  };
}

const add2 = x => x + 2;
const multiply3 = x => x * 3;
const subtract4 = x => x - 4;

const combined = sequence(add2, multiply3, subtract4);

console.log(combined(5));
console.log(combined(10));