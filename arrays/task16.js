const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}. ${fruits[i]}`);
// }

for (let i = 0, n = 1; i < fruits.length; i += 1, n += 1) {
  console.log(`${n}. ${fruits[i]}`);
}
