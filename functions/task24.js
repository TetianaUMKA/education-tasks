// function calcAverage() {
//   const arr = [...arguments];
//   let average = 0;
//   let num = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     num += arr[i];
//     average += 1;
//   }
//   return num / average;
// }

function calcAverage() {
  let total = 0;
  for (const num of arguments) {
    total += num;
  }
  return total / arguments.length;
}

console.log(calcAverage(1, 2, 3, 4)); // 2.5
console.log(calcAverage(14, 8, 2)); // 8
console.log(calcAverage(27, 43, 2, 8, 36)); // 23.2
