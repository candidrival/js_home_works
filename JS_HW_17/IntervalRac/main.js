function intervalRace(functions, t) {
  return new Promise((resolve) => {
      let results = [];
      let index = 0;

      function executeNext() {
          if (index < functions.length) {
              results.push(functions[index]());
              index++;
              setTimeout(executeNext, t);
          } else {
              resolve(results);
          }
      }

      executeNext();
  });
}

const funcs = [
  () => "Функція 1",
  () => "Функція 2",
  () => "Функція 3"
];

intervalRace(funcs, 1000).then(results => console.log(results));