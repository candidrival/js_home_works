function sqr(x, cache) {
  if (cache.has(x)) {
    console.log(`Значення взято з cache: ${x}^2 = ${cache.get(x)}`);
    return cache.get(x);
  }
  
  const result = x * x;
  cache.set(x, result);
  console.log(`Значення обчислено та додано в cache: ${x}^2 = ${result}`);
  return result;
}

const cache = new Map();

console.log(sqr(3, cache));
console.log(sqr(4, cache));
console.log(sqr(3, cache));
console.log(sqr(5, cache));
console.log(sqr(4, cache));