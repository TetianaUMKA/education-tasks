const stones = [
  {
    name: "Smaragd",
    price: 1300,
    quantity: 4,
  },
  {
    name: "Diamond",
    price: 2700,
    quantity: 3,
  },
  {
    name: "Sapphire",
    price: 400,
    quantity: 7,
  },
  {
    name: "Zirconium",
    price: 200,
    qauntity: 16,
  },
];

// function calcTotalPrice(stones, stoneName) {
//   let result = 0;
//   console.log(stones);
//   for (const stone of stones) {
//     console.log(stone);
//     if (stone.name === stoneName) {
//       result = stone.price * stone.quantity;
//       break;
//     }
//   }
//   return result;
// }

function calcTotalPrice(stones, stoneName) {
  console.log(stones);
  for (const stone of stones) {
    console.log(stone);
    if (stone.name === stoneName) {
      return stone.price * stone.quantity;
    }
  }
}

console.log(calcTotalPrice(stones, "Sapphire"));
