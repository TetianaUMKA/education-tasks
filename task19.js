// task A
const string = "Welcome to the future";
const result = string.split("").reverse().join("");
console.log(result);

// task B
// const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];
const langs = ["javascript", "c++", "haskel", "python", "ruby"];
// const langs = ["cpython", "bjavascript", "ac++", "haskel", "php", "ruby"];
// const langs = ["c", "b", "a", "h", "j", "p", "r"];
// const [arr] = [];
for (let i = 0; i < langs.length; i += 1) {
  console.log(langs[i][0]); // the first letter of each array element
  if (langs[0] > langs[i]) {
    const langsResult = langs.splice(i, 1)[0];
    langs.unshift(langsResult);
  }
}
console.log(langs);

// task C
const numbers = [2, 17, -156, 94, 1, 43, 35];
let min = numbers[0];
let ordinalArr = [];
for (let i = min; i < numbers.length; i += 1) {
  if (numbers[i] < min) {
    const numbersResult = numbers.splice(i, 1)[0];
    ordinalArr.push(numbersResult);
  }
}
console.log(ordinalArr);
console.log(numbers);

// let min = numbers[0];
// for (const value of numbers) {
//   if (value < min) {
//     min = value;
//   }
// }
// console.log(min);
