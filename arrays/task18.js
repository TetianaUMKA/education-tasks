const string = "Welcome to the future";

// const strArr = string.split(" ");
// console.log("strArr: ", strArr);
// strArr.shift();
// strArr.pop();
// const result = strArr.join(" ");
// console.log(result);

// У методі slice ми можемо звернутися до останього елементу масиву через -1
const result = string.split(" ").slice(1, -1).join(" ");
console.log(result);
