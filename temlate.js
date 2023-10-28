const value = 5;

if (value === 1) {
  console.log("one");
} else if (value === 2) {
  console.log("two");
} else if (value === 5) {
  console.log("good result");
} else {
  console.log("default");
}

switch (value) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  case 5:
    console.log("good result");
    break;
  default:
    console.log("default");
}
const dictationResult = 2;
const speakingTestResult = 5;
let examResult = dictationResult + speakingTestResult;
switch (true) {
  case examResult <= 6:
    console.log("bad result");
    break;
  case examResult === 7:
    console.log("not bad result");
    break;
  case examResult >= 8:
    console.log("good result");
    break;
  default:
    console.log("default");
}
