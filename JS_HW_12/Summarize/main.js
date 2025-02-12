function summarize(num) {
  return function(addend) {
    if (addend === undefined) {
      addend = parseInt(prompt("Введіть число для додавання:") || 1, 10);
    }
    return num + addend;
  };
}

const addNum = summarize(parseInt(prompt("Введіть число:")) || 1, 10);
console.log(addNum());