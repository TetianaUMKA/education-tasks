// task 23.1
function findLargestNumber(numbers) {
  let min = numbers[0];
  for (const num of numbers) {
    if (min < num) {
      min = num;
    }
  }
  return min;
}

console.log(findLargestNumber([2, 15, 230, 45, 6, 97]));
console.log(findLargestNumber([56, 4, 98, 450, 8, 68]));

// task 23.2
function findSmallestNumber() {
  const numbers = [...arguments];
  let min = numbers[0];
  for (const num of numbers) {
    if (min > num) {
      min = num;
    }
  }
  return min;
}

console.log(findSmallestNumber(2, 15, 230, 45, 6, 97));
console.log(findSmallestNumber(56, 4, 98, 450, 8, 68));

// task 23.3
function findLargestNumber2() {
  const arr = [...arguments];
  let min = 0;
  let minN;
  for (const num of arr) {
    if (typeof num === "number") {
      if (min < num) {
        min = num;
      }
    } else {
      minN = num[0];
      for (const n of num) {
        if (minN < n) {
          minN = n;
        }
      }
    }
  }

  return min < minN ? minN : min;
}

console.log(
  findLargestNumber2([2, 15, 980, 45, 6, 97], 56, 68, [1200, 1300], 3)
);
