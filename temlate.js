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

// Можна використовувати в JS одинарні або подвійні лапки.
// Якщо треба використати апостроф, то при одинарних виб'є помилку.
// Отже застосовуємо в цьому рядку подвійні замість одинарних, або зворотній слеш '/' перед апострофом.
// const stringExample = "М'який";
const stringExample = "М'який";
console.log(stringExample);

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
// 1) Масиви (str #350)
// 2) ...
// приклад мутабельності
const mutableArray = [350, 450, 650];
mutableArray.push(850); // [350, 450, 650, 850]
mutableArray.pop(); // [350, 450, 650]
mutableArray.length = 0; // []
console.log(mutableArray); // []

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
// за присутності частини рядка дає значення: 0
console.log("mango".indexOf("man"));
// щоб привести в булеве значення, треба поставити ! перед виразом
console.log(!"mango".indexOf("nam")); //false
console.log(!"mango".indexOf("man")); //true

// за відсутності частини рядка дає значення:false
console.log("mango".includes("nam"));

// Деякі методи
const roundedValue = 27.5;
console.log(Math.round(roundedValue));
// console.log(Math.ceil(roundedValue));
// console.log(Math.floor(roundedValue));

// Конкатенація - це операція додавання рядків, навіть якщо різні типи примитивних данних, домінуючим буде рядок при такому додаванні
const name = "Artem";
const age = 25;
const resultConcatenation = name + " " + age + " years old";
console.log(resultConcatenation);

const concatenationExample = 10 + 20 + "60" + 120;
console.log(concatenationExample);

// Оператори порівняння та приведення типів
// https://symbl.cc/en/unicode/table/
console.log(5 > 4); // true
console.log(10 >= "7"); // true
console.log("2" > "12"); // true
console.log("2" < "12"); // false
console.log("4" == 4); // true
console.log("6" === 6); // false
console.log("false" === false); // false
// true => 1 // false => 0
console.log(1 == true); // true
console.log(1 === true); // false
console.log(0 == false); //true
console.log(0 === false); // false
console.log("Lemon" < "lemon"); // true // "L" => 50 / 'l' => 70
console.log("Lemon" === "lemon"); // false
console.log(undefined == null); // true
console.log(undefined === null); // false

// Логічні оператори
// && - and // оператор повертає перше значення false, або останнє значення true
console.log(true && 3); // 3
console.log(false && 3); // false
console.log(true && 4 && "kiwi"); // 'kiwi'
console.log(true && 0 && "kiwi"); // 0
// || - or // оператор повертає перше значення true, або останнє значення false
console.log(true || 3); // true
console.log(true || 3 || 4); // true
console.log(true || false || 7); //true
console.log(null || 2 || undefined); // 2
console.log((1 && null && 2) > 0); // false
console.log(null || (2 && 3) || 4); // 3

// Значення за замовчуванням та оператор нульового злиття
// || працює на 6 значень, які повертають false(null, undefined, 0, "", false, NaN)
const incomingValue = 5;
const resultV = incomingValue + Number("qwe");
console.log(resultV); // NaN
const defaultValue = 10;
console.log(resultV || defaultValue); // у разі якщо NaN, то видасть значення за замовчуванням
// ?? - оператор нульового злиття пряцює на 2 значення: null, undefined
// let test;
// console.log(test); // undefind
// const testValue = test ?? "some value";
// console.log(testValue); // 'some value'

let test = 0;
console.log(test); // 0
const testValue = test ?? "some value";
console.log(testValue); // 0 //отже ?? використовуємо для ситуацій, коли необхідно виключити тільки null та undefined

// Щоб привести тип данних до number
const value_1 = 10;
const value_2 = "20";
const result_1_2 = value_1 + Number(value_2);
console.log(result_1_2);

// Шаблоні рядки (з'явились з приходом EC 6) потреба в конкатенації зникла
const companyName = "GoodWork";
const repairWorkers = 120;
const officeWorkers = 40;
const messageDesk = `${companyName} has ${
  repairWorkers + officeWorkers
} in both departments`;
console.log(messageDesk);

// Методи рядків та чейнінг - це поєднання декількох методів
let weight = "88,3";
let height = "1.85";
weight = Number(weight.replace(",", "."));
console.log(weight);

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

// Масиви
//             0     1      2      3       4
const array = ["hello", 1, null, true, [1, 2, 3]];
//             1     2      3      4       5
console.log(array);
console.log(Array.isArray(array)); //  перевірка, чи прийшов масив
// Array.isArray(array) - повертає true/false
const first = array[0];
console.log(first); //  'Hello'
console.log(array.length - 1); // взнаємо індекс останього елемента масиву
const last = array[array.length - 1];
console.log(last); // (3) [1, 2, 3]

// Ітерація масиву
// Перебрати елементи масиву ми можемо за допомогою циклу for та for of
// for !!!Ми працюємо з оригіналами елементів масиву
const arrayIteration = ["hello", 1, null, [1, 2, 3], true];
for (let i = 0; i < arrayIteration.length; i += 1) {
  if (Array.isArray(arrayIteration[i])) {
    for (let j = 0; j < arrayIteration[i].length; j += 1) {
      console.log(arrayIteration[i][j]);
    }
    continue; // contonue поставили для того, щоб перейти до наступного елемента ітерації, бо цей елемент вже опрацьований в ітерації for, який вкладений у if
  }
  console.log(arrayIteration[i]);
}

// Приклад присвоєнням ітеруємого елементу змінній (константі)
const arrayExample = ["string", 135, null, [5, 6, 7, 8, 9], true];
for (let i = 0; i < arrayExample.length; i += 1) {
  const arrayExampleItem = arrayExample[i];
  if (Array.isArray(arrayExampleItem)) {
    for (let j = 0; j < arrayExampleItem.length; j += 1) {
      console.log(arrayExampleItem[j]);
    }
    continue;
  }
  console.log(arrayExample[i]);
}

//for of перебирає всі елементи масіву з перщого до останього,
// !!! Але використовуючи for of ми працюємо з копію ітеруємого елемента
for (const item of arrayExample) {
  console.log(item);
}

// приклад, як визначити тип елементу масиву та якщо це потрібний тип, то перевизначити значення оригінального елементу для цього й треба  цикл for замість for of
const arrayExampleType = ["super", 135, null, [5, 6, 7, 8, 9], true];
for (let i = 0; i < arrayExampleType.length; i += 1) {
  console.log(typeof arrayExampleType[i]);
  if (typeof arrayExampleType[i] === "string") {
    arrayExampleType[i] = "ok";
  }
}
console.log(arrayExampleType); // ['ok', 135, null, [5, 6, 7, 8, 9], true]

// while
const arrayW = [24, "Hello", null, true, [20, 30, 40]];
let l = 0;
while (l < arrayW.length) {
  console.log(arrayW[l]);
  if (arrayW[l] === null) {
    arrayW[l] = false;
  }
  l += 1;
}
console.log(arrayW); // [24, "Hello", false, true, [20, 30, 40]];

// Присвоєння в примітивних типах даних (під кожну змінну виділяється окремий куточок памяті)
let valueExample = 1;
let testExample = valueExample;
valueExample += 10;
console.log("testExample:", testExample); // testExample: 1
console.log("valueExample:", valueExample); // valueExample: 11
valueExample = "str";
console.log("valueExample:", valueExample); // valueExample: str
console.log(valueExample === testExample); // false

// Присвоєння в складних типах даних (іншій змінній(copy) ми присвоюємо посилання на масив, а отже якщо ми робимо якісь дії з однією зміною, то це відображається на іншій, бо це одне й те саме місце в памяті, ті самі данні)
const assignmentArray = [120, 130, 140, 150];
const copy = assignmentArray;
assignmentArray.push(160, 170);
console.log(assignmentArray); // [120, 130, 140, 150, 160, 170];
console.log(copy); // [120, 130, 140, 150, 160, 170];
console.log(assignmentArray === copy); // true

const arrayOne = [1, 2, 3, 4];
const arrayTwo = [1, 2, 3, 4];
console.log(arrayOne === arrayTwo); // false тому що це два різних пасилання на різні масиви

const sports = ["футбол", "бейсбол"];
const total = sports.push("американський футбол", "плавання");
console.log(sports); // ['футбол', 'бейсбол', 'американський футбол', 'плавання']
console.log(total); // 4 (показує length, або якщо інший метод, то іншу зміну)
const total2 = sports.pop();
console.log(total2); // плавання

// Методи перетворення у масив та роботи з ним
const stringA = "Hello word";
const arrayA = stringA.split(" ");
const arrayB = stringA.split("");
console.log(arrayA); // ['Hello', 'word']
console.log(arrayB); // ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'd']
const arrayC = stringA.split("anithing");
console.log(arrayC); // ['Hello word']
console.log(stringA); // "Hello word" // залишилась незмінною
// змінює порядок розташування елементів масиву
arrayA.reverse();
console.log(arrayA); // ['word', 'Hello',]
// перетворює в рядок елементи масиву
const resultA = arrayA.join("-");
console.log(resultA); // "word-Hello"

// const resultA = stringA.split(" ").reverse().join("-") // "word-Hello" // можна було все одною строкою записати (chaining)

// break & continue
// continue ніби говорить skip цю ітерацію
const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }
  console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
}
// break пририває подальше виконання циклу після потрібної ітерації
const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message = "Клієнт з таким ім'ям відсутній в базі даних!";

for (const client of clients) {
  if (client === clientNameToFind) {
    message = "Клієнт з таким ім'ям є в базі даних!";
    break;
  }
}
console.log(message); // Клієнт з таким ім'ям є в базі даних!
