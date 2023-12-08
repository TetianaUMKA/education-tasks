const salaries = {
  Jone: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (const value of Object.values(salaries)) {
  sum += value;
}

console.log(sum);

// for (const key in salaries) {
//   sum += salaries[key];
// }

// console.log(sum);
