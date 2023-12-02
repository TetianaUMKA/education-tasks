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
function findSmallestNumber(numbers) {
  numbers = [...arguments];
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
