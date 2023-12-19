// one / function expression / put to parameters of another and I put the first like an argument
const fn = function (message1, callback) {
  console.log(message1);
  console.log(callback);
  console.log(callback(0));
  callback(777);
};

const fnCallback = function (number) {
  console.log("There is the message2 when we call fnCallback", number);
};

fn("There is the message1, the Origin Callback✅", fnCallback);

// one / function expression / put to the body of another function expression and I put the first like an argument
const fn1 = function (message1) {
  console.log(message1);
  console.log(fnPutToBody);
  console.log(fnPutToBody(0));
  fnPutToBody(1000);
};

const fnPutToBody = function (number) {
  console.log("There is the message2 when we call fnPutToBody", number);
};

fn1("There is the message1, the first test case✅", fnPutToBody);

// one / function expression / put to the body of another function expression
const fn2 = function (message1) {
  console.log(message1);
  console.log(fnPutToBody2);
  console.log(fnPutToBody2(0));
  fnPutToBody2(2000);
};

const fnPutToBody2 = function (number) {
  console.log("There is the message2 when we call fnPutToBody", number);
};

fn2("There is the message1, the second test case✅");

// one / function declaration / put to the body of another function expression and I put the first like an argument
const fn3 = function (message1) {
  console.log(message1);
  console.log(fnPutToBody3);
  console.log(fnPutToBody3(0));
  fnPutToBody3(3000);
};

function fnPutToBody3(number) {
  console.log("There is the message2 when we call fnWithout", number);
}

fn3("There is the message1, the third case✅");

/// !!! The conclusion of this test is that code execute the same in the all cases///
