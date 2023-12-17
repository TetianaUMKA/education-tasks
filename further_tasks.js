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
/**
 *
 * @param {Array} stones
 * @param {String} stoneName
 * @returns {String} to console.log
 */

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

// #4
const TransactionTypes = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

let id = 1;
const account = {
  balance: 0,

  transactions: [],

  createTransaction(amount, type) {
    return {
      amount, //amount: amount,
      type, //type: type,
      id, // or id: Math.floor(Math.random() * 100) // or id:Date.now()
    };
  },

  makeDeposit(amount) {
    this.balance += amount;
    this.transactions.push(
      this.createTransaction(amount, TransactionTypes.DEPOSIT)
    );
    id += 1;
  },

  makeWithdrow(amount) {
    if (this.balance > amount && this.balance > 10) {
      this.balance -= amount;
      this.transactions.push(
        this.createTransaction(amount, TransactionTypes.WITHDRAW)
      );
      id += 1;
    } else {
      console.log("Your balance is insufficient");
    }
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      if (transaction.id === id) return transaction;
    }
    return {};
  },

  getTransactionTotal(type) {
    let transactionTotal = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        transactionTotal += transaction.amount;
      }
    }
    return `The total amount of ${type} transactions: ${transactionTotal}`;
  },
};

account.makeDeposit(2000);
account.makeDeposit(700);
account.makeDeposit(300);

console.log(account.getBalance());

account.makeWithdrow(400);
account.makeWithdrow(800);
account.makeWithdrow(9000);
account.makeWithdrow(6000);
const currentBalance = account.getBalance();
console.log(currentBalance);

console.log(account.transactions);

console.log(account.getTransactionDetails(3));

console.log(account.getTransactionTotal("deposit"));
console.log(account.getTransactionTotal("withdraw"));

// #5
function calcBMI({ weight, height }) {
  const weightNum = Number(weight.replace(",", "."));
  const heightNum = Number(height.replace(",", "."));
  return Number((weightNum / heightNum ** 2).toFixed(1));
}

console.log(
  calcBMI({
    weight: "88,3",
    height: "1.75",
  })
);

// #6
function printContactInfo({ names, phones }) {
  const namesArray = names.split(",");
  const phonesArray = phones.split(",");
  for (let i = 0, n = 1; i < namesArray.length; i += 1, n += 1) {
    console.log(
      `${n}. ${namesArray[i]} tel: ${
        phonesArray[i] ? phonesArray[i] : "Ops..🤷🏻‍♀️"
      }`
    );
  }
}
printContactInfo({
  names: "Jacob,William,Solomon,Artem",
  phones: "0967895432, 0675643276, 0684563218",
});

// #6 add default value for one param to avoid errors
function printContactInfo2({ names = "", phones }) {
  const namesArray = names.split(",");
  const phonesArray = phones.split(",");
  for (let i = 0, n = 1; i < namesArray.length; i += 1, n += 1) {
    console.log(
      `${n}. ${namesArray[i]} tel: ${
        phonesArray[i] ? phonesArray[i] : "Ops..🤷🏻‍♀️"
      }`
    );
  }
}
printContactInfo2({
  // names: "Jacob,William,Solomon,Artem",
  phones: "0967895432, 0675643276, 0684563218",
});

// #6 default value for all params to avoid errors
function printContactInfo3({ names, phones } = { names: "", phones: "" }) {
  const namesArray = names.split(",");
  const phonesArray = phones.split(",");
  for (let i = 0, n = 1; i < namesArray.length; i += 1, n += 1) {
    console.log(
      `${n}. ${namesArray[i]} tel: ${
        phonesArray[i] ? phonesArray[i] : "Ops..🤷🏻‍♀️"
      }`
    );
  }
}
printContactInfo3();
