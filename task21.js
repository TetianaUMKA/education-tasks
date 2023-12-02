// task 21.1
function min(a, b) {
  // if (a < b) {
  //   return a;
  // } else {
  //   return b;
  // }
  return a < b ? a : b;
}

console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1

//task 21.2
function getRectArea(dimensions) {
  // const arr = dimensions.split(" ");
  // return Number(arr[0] * arr[arr.length - 1]);
  dimensions = dimensions.split(" ");
  // return Number(dimensions[0]) * Number(dimensions[1]);
  return Number(dimensions[0] * dimensions[dimensions.length - 1]);
}

console.log(getRectArea("8 11"));
