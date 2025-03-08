function sumArrayPromise(numbers) {
  return new Promise((resolve, reject) => {
      if (!Array.isArray(numbers) || !numbers.every(num => typeof num === 'number')) {
          return reject(new Error("Масив повинен містити тільки числа"));
      }
      
      setTimeout(() => {
          const sum = numbers.reduce((acc, num) => acc + num, 0);
          resolve(sum);
      }, 3000);
  });
}

sumArrayPromise([1, 2, 3, 4, 5])
  .then(result => console.log("Сума:", result))
  .catch(error => console.error("Помилка:", error.message));
