// 1.
const multiplier = (a, b, c) => a * b * c;
console.log(multiplier(4, 5, 6)); // 120
/* --------------------------------------------------------------------- */
// 2. Using literal
const sentence = `I am a Web Developer.
I love to code.
I love to eat biryani.`;
console.log(sentence);
// or using split and join
const sentence2 =
  " I am a Web Developer. I love to code. I love to eat biryani.";
console.log(sentence2.split(".").join(".\n"));
/* 
I am a Web Developer.
I love to code.
I love to eat biryani. 
*/
/* --------------------------------------------------------------------- */
// 3.
const add = (a, b = 0) => a + b;
console.log(add(3, 5)); // 8
console.log(add(3)); // 3
