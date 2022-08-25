const operate = (arr = []) => arr.reduce((p, c) => p + c * c) / arr.length;

console.log(operate([1, 3, 5, 7])); // 21
