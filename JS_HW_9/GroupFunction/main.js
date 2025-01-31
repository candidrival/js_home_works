function group(array, callback) {
    return array.reduce((acc, item, index, arr) => {
      const key = callback(item, index, arr);
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {});
  }
  
  const data = [
    { id: 1, category: 'fruit', name: 'apple' },
    { id: 2, category: 'vegetable', name: 'carrot' },
    { id: 3, category: 'fruit', name: 'banana' },
    { id: 4, category: 'vegetable', name: 'broccoli' },
  ];
  
  const grouped = group(data, item => item.category);
  console.log(grouped);