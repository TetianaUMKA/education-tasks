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
// 1) Array (str #358)
// 2) Object
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
const firstName = "Artem";
const age = 25;
const resultConcatenation = firstName + " " + age + " years old";
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

// Conditional (ternary) operator // that we can use instead of "if ... alse", but we can use only three operandes. It is written like this "condition ? expression1 : expression2;"

// Області видимості (field of view). Part 1

let a = 15;

if (true) {
  a = 25;
}
console.log(a); // 25

let b = 15;

if (true) {
  let b = 1;
  b = 25;
}
console.log(b); // 15

let c = 10;

if (true) {
  let c = 15;
  if (true) {
    c = 25;
  }
}
console.log(c); // 10

let d = 10;

if (true) {
  let d = 15;
  if (true) {
    d = 25;
  }
  console.log(d); // 25
}

let g = 10;

if (true) {
  g = 15;
  if (true) {
    g = 25;
  }
}
console.log(g); // 25

let f = 25;

if (true) {
  f = 44;
  if (true) {
    f = 31;
  }
  console.log(f); // 31
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

// Масиви (index -> value)
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

//for of перебирає всі елементи масsву з перщого до останього,
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

// Методи для роботи з масивом //

const sports = ["футбол", "бейсбол"];
// push() додає один або декілька елементів наприкінці масиву
const total = sports.push("американський футбол", "плавання");
console.log(sports); // ['футбол', 'бейсбол', 'американський футбол', 'плавання']
console.log(total); // 4 (повертає length, або якщо інший метод, то іншу зміну)
// pop() видаляє останній елемент з кінця масиву
const total2 = sports.pop();
console.log(total2); // плавання

const stringA = "Hello word";
// split(delimiter) перетворює рядок в масив
const arrayA = stringA.split(" ");
const arrayB = stringA.split("");
console.log(arrayA); // ['Hello', 'word']
console.log(arrayB); // ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'd']
const arrayC = stringA.split("anything");
console.log(arrayC); // ['Hello word']
console.log(stringA); // "Hello word" // залишилась незмінною
// reverse() змінює порядок розташування елементів масиву
arrayA.reverse();
console.log(arrayA); // ['word', 'Hello',]
// join(delimiter) перетворює в рядок елементи масиву
const resultA = arrayA.join("-");
console.log(resultA); // "word-Hello"
// const resultA = stringA.split(" ").reverse().join("-") // "word-Hello" // можна було все одною строкою записати (chaining)

// unshift() додає один або декілька елементів напочаток масиву
const arrayExample2 = ["Yes", "No", "Of course"];
const arrayUnshift = arrayExample2.unshift("No doubt");
console.log(arrayUnshift); // 4 // повертає length
console.log(arrayExample2); // ["No doubt", "Yes", "No", "Of course"]
// shift() видаляє перший елемент з початку масиву
const arrayShift = arrayExample2.shift();
console.log(arrayShift); // No doubt
console.log(arrayExample2); // ["Yes", No", "Of course"]

// indexOf(value) повертає перший індекс, в якому елемент зі значенням value був знайдений в масиві, або число -1, якщо такий елемент відсутній.
const customers = ["White", "Brown", "Grey", "Green"];
console.log(customers.indexOf("Brown")); // 2
console.log(customers.indexOf("Red")); // -1

// includes(value) перевіряє, чи містить масив елемент зі значенням value і повертає true або false
console.log(customers.includes("Brown")); // true
console.log(customers.includes("Red")); // false

// splice() видаляє, додає і замінює елементи у довільному місці масиву.
// видалення // splice(position, num) змінює вихідний масив і повертає масив, що містить видалені елементи
const customers2 = ["White", "Brown", "Grey", "Green", "Yellow"];
const deletedCustomers = customers2.splice(1, 2);
console.log(customers2); // ["White", "Green", "Yellow"]
console.log(deletedCustomers); // ["Brown", "Grey"]
// додавання // splice(position, 0, new_element_1, new_element_2, ...)
const addedCustomers = customers2.splice(1, 0, "Black", "Blue");
console.log(customers2); // ["White", "Black", "Blue", "Green", "Yellow"]
console.log(addedCustomers); // нічого не повертає []
// заміна // splice(position, num, new_element_1, new_element_2, ...)
const replacedCustomers = customers2.splice(1, 2, "Red");
console.log(customers2); // ["White", "Red", "Green", "Yellow"]
console.log(replacedCustomers); // ["Black", "Blue"]

// slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його.
// Копія створюється з begin та до, але не включно, end - індекси елементів вихідного масиву.
const customers3 = ["Girl", "Boy", "Baby", "Dog", "Man", "Woman"];
const newCustomer3 = customers3.slice(2, 4);
console.log(customers3); // ["Girl", "Boy", "Baby", "Dog", "Man", "Woman"] // без змін
console.log(newCustomer3); // ["Baby", "Dog"] // новий масив

// concat() об'єднує два або більше масивів в один. Він не змінює масив, на якому викликається, а повертає новий.
// Порядок аргументів методу впливає на порядок елементів нового масиву.

const oldClients = ["One", "Two", "Three", "Four"];
const newClients = ["Five", "Six"];
const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst); // ["One", "Two", "Three", "Four", "Five", "Six"]
const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(allClientsWithNewFirst); // ["Five", "Six", "One", "Two", "Three", "Four"]
console.log(oldClients); // ["One", "Two", "Three", "Four"]
console.log(newClients); // ["Five", "Six"]

// Functions //

const arr5 = [50, 100, 200];
const arr6 = [60, 200, 300];
const arr7 = [70, 400, 500];

// Function declaration creates a Function object. This type of function returns a value each time when it is called everywhere in the code (after or before initialization).

function count(item) {
  for (let i = 0; i < item.length; i += 1) {
    item[i] = (item[i] * 30) / 100;
  }
  return item;
  // console.log(item);
}
console.log(count(arr5));
// count(arr5);

// Function expression - the type of function which is called immediately and assigned to a variable. It is an anonymous function. Therefore this function we can call only after declaring.
const showScore = function (item) {
  let score = 0;
  for (let i = 0; i < item.length; i += 1) {
    if (item[i] > 0) {
      score += item[i];
    }
    console.log(item[i]);
  }
  // return `Your score: ${score}`;
  console.log(`Your score: ${score}`);
};

// console.log(showScore(arr6));
showScore(arr6);

// Arguments is the like-array object inside function which is an iterable object that contains the values of the arguments passed to that function. It solves a problems with an unknown numbers of arguments. But it doesn't have usefull methods such as sort.arguments, splice.arguments, includes.arguments etc.

function add() {
  console.log(arguments);
  let sum = 0;
  // for (let i = 0; i < arguments.length; i += 1) {
  //   sum += arguments[i];
  // }
  for (const value of arguments) {
    sum += value;
  }
  console.log(sum);
}

add(25, 65, 95, 135);
add(45, 75, 250);
add(350, 750, 1050, 1250, 1450);

/* but if we need more then the like-array object we should use the methods such as:
1) Array.from(arguments)
2) Array.prototype.slice.call(arguments)
3)'spread syntax: [...arguments]' It do spreading and convert the like-array to an array
*/

function sortData() {
  // const sortedArray = Array.from(arguments);
  // const sortedArray = Array.prototype.slice.call(arguments);
  const sortedArray = [...arguments];
  for (const value of sortedArray) {
    sortedArray.sort();
  }
  console.log(sortedArray);
}

sortData(2, 5, 1, 3); // [1, 2, 3, 5]
sortData("k", "c", "d", "r", "a"); // ["a", "c", "d", "k", "r"]
sortData("Tetiana", "Alice", "Carl", "Michel", "Angel"); // ["Alice", "Angel", "Carl", "Michel", "Tetiana"]

// The operator "return" gives back the result of the function

function findLargeNumber() {
  const largeNumberList = [];
  for (const value of arguments) {
    if (value > 10) {
      largeNumberList.push(value);
    }
  }
  return largeNumberList;
}
console.log(findLargeNumber(23, 5, 78, 2, 45, 8, 10)); // [23, 78, 45]

function largeSum() {
  let sum = 0;
  for (const value of arguments) {
    sum += value;
  }
  // if (sum > 10) {
  //   return sum;
  // } else {
  //   return 0;
  // }
  return sum > 10 ? sum : 0;
}
console.log(largeSum(2, 3, 4));
console.log(largeSum(10, 20, 30));

// known number of arguments
function addNumber(val1, val2) {
  return val1 + val2;
}
console.log(addNumber(120, 130));
/* but if we receive a wrong number of arguments, the function will return NaN, because a uncome value will be undefind
for example: more console.log(addNumber(120, 130, 150)) or fewer console.log(addNumber(120))*/

// So that we have to specify a default value if we are not sure whether it will come or not

function addNumber2(val1, val2 = 0) {
  return val1 + val2;
}
console.log(addNumber2(155)); // 155
console.log(addNumber2(155, 10)); // 165

/* for string  function addNumber2(val1, val2 = '')
   for array   function addNumber2(val1, val2 = [])
   etc
*/

// Області видимості (field of view). Part 2
let n = 10;
function foo() {
  a = 15;
}
foo();
console.log(a); // 15

let o = 10;
function fii() {
  let o = 15;
}
foo();
console.log(o); // 10

let p = 10;
function faa() {
  let p = 15;
  p = 45;
}
faa();
console.log(p); // 10

// wrong example
// let r = 10;
// function fee() {
//   r = 45;
//   let r = 15;
// }
// fee();
// console.log(r); //  Cannot access 'r' before initialization

let s = 10;
function fuu(s) {
  s = 45;
}
fuu();
console.log(s); // 10

let t = 10;
function fyy(t) {
  t = 45;
}
fyy(15);
console.log(t); // 10

let v = 10;
function fya(v) {
  v = 45;
}
fya(v);
console.log(v); // 10

let w = 10;
function fyb(w) {
  w = 45;
  return w;
}
fyb();
console.log(w); // 10

const data = [1, 2, 3];
function deleteData(val) {
  val.splice(0, 1);
}
deleteData(data);
console.log(data); // [2, 3]

// Call stack (стек викликів)

function createString(fullname, balance) {
  // const result = addScores(balance);
  // return `${fullname}, your balance is ${result} scores. You can spend them for everything!`;
  return `${fullname}, your balance is ${addScores(
    balance
  )} scores. You can spend them for everything!`;
}
console.log(createString("Tetiana", [500, 4000, 3000]));

function addScores(arr) {
  let balanceSum = 0;
  for (const value of arr) {
    balanceSum += value;
  }
  return balanceSum;
}
//-------

// Object (key: value) Порядок розміщення властивостей об'єкту не має різниці, бо не має прив'язки до індекса, всі властивості розміщуються згідно алфавітного порядку назв їхніх ключів.
const firstValue = 50;
const secondValue = 30;
const user = {
  firstName: "Artem",
  age: 28,
  programLanguages: {
    html: false,
    css: false,
    js: true,
    React_Native: true,
    // "React Native": false, // not good idea to name key by using gap
  },
  objectResult: firstValue + secondValue,
};

console.log(user);

console.log(user.objectResult); // 80

console.log(user.programLanguages.React_Native); //true
// console.log(user["programLanguages"]["React Native"]); // the way for string keys

// Метод перебору object for...in
for (const key in user) {
  // console.log(user.age); // 28
  console.log(user[key]);
}

user.age = 29;
user.age += 1;
console.log(user.age); // 30

// add element in object
user.city = "LA";
console.log(user);
console.log(user.city); // LA

// delete
delete user.programLanguages.React_Native;
console.log(user);
console.log(user.programLanguages);

// Object.freeze() is the method which prevents extensions and makes existing properties non-writable and non-configurable
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

// Object.freeze(user);
// user.age = 50; // TypeError // because we can change anything in object

// Власний та невласний об'єкт
const user2 = Object.create(user);
// у такий спосіб ми отримаємо об'єкт із доступом до інформації про властивості оригіналу, на основі якого був сворений прототип
console.log(user2); // {...} пустий але  з нижче вкладенними посиланнями на властивості оригінала
console.log(user.firstName); // Artem
// але не маємо доступу, щоб змінювати значення в оригіналі

user2.age = 33; // запише до створеного портотипу
console.log(user.age); // 30
console.log(user2.age); // 33

for (const key in user2) {
  console.log("All", user2[key]); // 33 Artem {html: false, css: false, js: true} 80 LA
  if (user2.hasOwnProperty(key)) {
    console.log("Own", user2[key]);
  }
}

// щоб дізнатись чи є ключ з властивістю
const userLucky = {
  score: 0,
};
//first way, don't show key if value property = one of the six value, which returns 'false' in boolean
if (userLucky.score) {
  console.log("yes");
} else {
  console.log("no, because it is 0, therefore it means false in boolean");
}
//second way shows own property even it will be false value in boolean
if (userLucky.hasOwnProperty("score")) {
  console.log("yes, it is true");
}
// third way shows all properties with key name which is needed even if it won't be own properties and will be false value in boolean
if ("score" in userLucky) {
  console.log("yes, of course");
}

// Method of the object - це функція, яка вкладенна в середину об'єкту
// якщо ми знаходимося у методі об'єкту, то до всіх властивостей цього об'єкту звертаємося через ключове слово this

const userSomeone = {
  firstName: "Andrew",
  age: 35,
  languages: {
    html: true,
    css: true,
    js: true,
    react: true,
    node: false,
  },
  showUserProperties() {
    console.log(this); // console.log(userSomeOne) means the same, but word 'this' instead of name of object gives us opportunity use method for later created prototypes
  },
  userIntroduce() {
    console.log(`Hello! My name ${this.firstName} ${this.age} yers old`);
  },
  userSkillsList() {
    for (const key in this.languages) {
      if (this.languages[key]) {
        console.log(key);
      }
    }
  },
  userSkillsListAnotherWay() {
    const keys = Object.keys(this.languages); // Object.keys() is used for only own properties (therefore as theorically we can use name this object('userSomeone') instead of 'this')
    console.log(keys); // returns property keys as an array with strings in it
    for (const key of keys) {
      if (this.languages[key]) {
        console.log(key);
      }
    }
    const values = Object.values(this.languages); // Object.values() is used for only own properties
    console.log(values); // returns property values as an array with different values in it
  },
};

userSomeone.showUserProperties();
userSomeone.userSkillsListAnotherWay();

// we can create a prototype to many different users and use the method of original object
const userSomebodyElse = Object.create(userSomeone);
userSomebodyElse.age = 40;
userSomebodyElse.firstName = "Nika";
userSomebodyElse.languages = {
  html: true,
  css: true,
  js: true,
  react: true,
  node: true,
};

userSomebodyElse.showUserProperties();

userSomeone.userIntroduce();
userSomebodyElse.userIntroduce();

userSomeone.userSkillsList();
userSomebodyElse.userSkillsList();
