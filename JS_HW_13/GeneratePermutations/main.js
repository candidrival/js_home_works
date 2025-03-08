function generatePermutations(arr) {
  if (arr.length === 0) return [[]];
  
  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
      let current = arr[i];
      let remaining = arr.slice(0, i).concat(arr.slice(i + 1));
      let remainingPermutations = generatePermutations(remaining);
      
      for (let perm of remainingPermutations) {
          result.push([current, ...perm]);
      }
  }
  
  return result;
}

console.log(generatePermutations([1, 2, 3]));