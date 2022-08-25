const accumulator = (arr1 = [], arr2 = []) => Math.max(...arr1, ...arr2);

console.log(accumulator([1, 3, 5, 7], [2, 4, 6, 8])); // 8
