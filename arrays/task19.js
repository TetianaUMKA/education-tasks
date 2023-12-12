// task A
const string = "Welcome to the future";
const result = string.split("").reverse().join("");
console.log(result);

// task B
const langs = ["c", "b", "a", "j", "s", "h", "r", "p"];
console.log(langs.sort()); // It sorts and changes the original
console.log(langs);

// task C
const numbers = [2, 17, -156, 94, 1, 43, 35];
let min = numbers[0];
for (const value of numbers) {
  if (value < min) {
    min = value;
  }
}
console.log(min);

const sortedValues = numbers.toSorted((a, b) => a - b); // It returns new array
console.log(sortedValues);
