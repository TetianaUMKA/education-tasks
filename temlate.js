// Змінні const та let

//  Не може бути без значення, та не може в подальшому перевизначатися
const valueConst = 5;

//  Може бути без значення, та може в подальшому перевизначатися
let valueLet;
valueLet = 3;

// Використовувалась масово до 2015 р до виходу EcmaScript 6
// має можливість визиватися вище по коду, а також долає всі області видимості, окрім функціональної
valueVar = "valueVar";
var valueVar;
console.log(valueVar);

// Нестроге та строге порівняння
// true відбулося приведення типів
console.log(2 == "2");
// false відбулося порівняння типів
console.log(2 === "2");

// Два типи данних

// Примитивні типи данних - імутабельні типи данних(їх можна змінити лише через перевизначення (за допомогою оператора присвоєння)
// 1) Number
// 2) String
// 3) Boolean
// 4) Undefind
// 5) Null

let students = 60;
// the same result will be 110
students = students + 50;
students += 50;

const result = 5 + 7 - 2 * 2;
console.log(result);

// Складні типи данних - мутабельні(їх можна змінювати за допомогою методів)
// 1) .....

// Булеве значення
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(false));

// Інверсія
console.log(!false);

// Деякі методи для перевірки

// за відсутності частини рядка дає значення: -1
console.log("mango".indexOf("nam"));
// за прісутності частини рядка дає значення: 0
console.log("mango".indexOf("man"));
// щоб привести в булеве значення, треба поставити ! перед виразом
console.log(!"mango".indexOf("nam"));

// за відсутності частини рядка дає значення:false
console.log("mango".includes("nam"));

// розгалуження/умови
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

// Області видимості

let a = 15;

if (true) {
  a = 25;
}
console.log(a);

let b = 15;

if (true) {
  let b = 1;
  b = 25;
}
console.log(b);

let c = 10;

if (true) {
  let c = 15;
  if (true) {
    c = 25;
  }
}
console.log(c);

let d = 10;

if (true) {
  let d = 15;
  if (true) {
    d = 25;
  }
  console.log(d);
}

let g = 10;

if (true) {
  g = 15;
  if (true) {
    g = 25;
  }
}
console.log(g);

let f = 25;

if (true) {
  f = 44;
  if (true) {
    f = 31;
  }
  console.log(f);
}

// Цикли

// for (let i = 0; i < 5; i += 1) {
//   console.log(i);
// }

const str = "iterable element";

for (let i = 0; i < str.length; i += 1) {
  console.log(str[i]);
}

for (let i = 0; i < str.length; i += 1) {
  if (str[i] !== "n") {
    continue;
  }
  console.log(str[i]);
}

for (let i = 0; i < str.length; i += 1) {
  if (str[i] === "n") {
    console.log(str[i]);
  }
}

// const str = "while";
// let i = 0;
// while (i < str.length) {
//   console.log(str[i]);
//   i += 1;
// }

// const string = "while";
// let i = 0;
// while (i < string.length) {
//   if (string[i] === "l") {
//     console.log("yes");
//   } else {
//     console.log("no", string[i]);
//   }
//   i += 1;
// }

// const string = "while";
// let i = 0;
// while (i < string.length) {
//   if (string[i] === "l") {
//     console.log("yes", string[i]);
//     break;
//   }
//   console.log("no", string[i]);
//   i += 1;
// }

// const string = "while";
// let i = 0;
// while (i < string.length) {
//   if (string[i] !== "l") {
//     console.log("no", string[i]);
//   } else {
//     console.log("yes", string[i]);
//     break;
//   }
//   i += 1;
// }

const string = "do while";
let i = 0;

do {
  if (string[i] !== "l") {
    console.log("no", string[i]);
  } else {
    console.log("yes", string[i]);
  }
  i += 1;
} while (i < string.length);

// do {
//   if (string[i] === "l") {
//     console.log("yes", string[i]);
//     break;
//   }
//   console.log("no", string[i]);
//   i += 1;
// } while (i < string.length);
