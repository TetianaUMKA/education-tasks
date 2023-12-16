// #1
const user = {
  userName: "Kate",
  age: 20,
  hobby: "design",
  premium: true,
};

user.mood = "happy";
user.hobby = "3D design";
user.premium = false;
// user.premium = !user.premium

for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

// old method
// for (const key in user) {
//   if (user.hasOwnProperty(key)) {
//     console.log(`${key}: ${user[key]}`);
//   }
// }

// #2
const salaries = {
  John: 100,
  Ann: 160,
  Peter: 130,
};

let sum = 0;
for (const value of Object.values(salaries)) {
  sum += value;
}
console.log(sum);

// #3

const stones = [
  {
    name: "Emerald",
    price: 1300,
    quantity: 4,
  },
  {
    name: "Chrysolite",
    price: 1400,
    quantity: 7,
  },
  {
    name: "Diamond",
    price: 6700,
    quantity: 2,
  },
  {
    name: "Granite",
    price: 50,
    quantity: 68,
  },
];

function calcTotalStonePrice(stones, stoneName) {
  let stoneFoundName = ""; // let stoneFoundName was created for further use
  for (const stone of stones) {
    if (stoneName === stone.name) {
      stoneFoundName = stone;
      break;
    }
  }
  if (!stoneFoundName)
    return console.log(
      `The stone with this name is unavailable in our internet-shop`
    );

  console.log(
    `${stoneFoundName.name}: ${
      stoneFoundName.price * stoneFoundName.quantity
    } UAH`
  );
}

// function calcTotalStonePrice(stones, stoneName) {
//   for (const stone of stones) {
//     if (stoneName === stone.name) {
//       return console.log(`${stone.name}: ${stone.price * stone.quantity} UAH`);
//     }
//   }
//   return console.log(
//     `The stone with this name is unavailable in our internet-shop`
//   );
// }

calcTotalStonePrice(stones, "Emerald");
calcTotalStonePrice(stones, "Chrysolite");
calcTotalStonePrice(stones, "Diamond");
calcTotalStonePrice(stones, "Granite");

calcTotalStonePrice(stones, "Kiwi");
