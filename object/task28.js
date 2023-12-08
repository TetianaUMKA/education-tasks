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

const stones = [
  {
    stoneName: "Smaragd",
    price: 1300,
    quantity: 4,
  },
  {
    stoneName: "Diamond",
    price: 2700,
    quantity: 3,
  },
  {
    stoneName: "Sapphire",
    price: 400,
    quantity: 7,
  },
  {
    stoneName: "Zirconium",
    price: 200,
    qauntity: 16,
  },
];
