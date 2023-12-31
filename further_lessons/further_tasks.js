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
  phones: "0967895432,0675643276,0684563218",
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
  phones: "0967895432,0675643276,0684563218",
});

// #6 default value for all params to avoid errors
function printContactInfo3(
  { names = "", phones = "" } = { names: "", phones: "" }
) {
  const namesArray = names.split(",");
  const phonesArray = phones.split(",");
  for (let i = 0, n = 1; i < namesArray.length; i += 1, n += 1) {
    !names && !phones
      ? console.log(`"Ops..🤷🏻‍♀️ The list is empty"`)
      : console.log(
          `${n}. ${namesArray[i]} tel: ${
            phonesArray[i] ? phonesArray[i] : "Ops..🤷🏻‍♀️"
          }`
        );
  }
}
printContactInfo3();

printContactInfo3({
  names: "Kate,Jonas,Alex,Mark",
  phones: "0967895400,0675600276,0684003218,0986754300",
});

printContactInfo3({
  names: "Kate,Jonas,Alex,Mark",
  // phones: "0967895400,0675600276,0684003218,0986754300",
});

// #7
function getBotReport({ companyName, bots: { repair, defence } }) {
  return `${companyName} has ${repair + defence} bots in stock`;
}

console.log(
  getBotReport({
    companyName: "Cyberdyne System",
    bots: {
      repair: 150,
      defence: 50,
    },
  })
);

// #7 If we need deconstruct a code that was written earlier by changing nothing in the code of the function.

function getBotReport2({
  companyName,
  bots: { repair: defenceBots, defence: repairBots },
}) {
  return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}

// console.log("Cyberdyne System", 150, 50);

console.log(
  getBotReport2({
    companyName: "Cyberdyne System",
    bots: {
      repair: 150,
      defence: 50,
    },
  })
);

// #8
const company1 = {
  companyName: "CyberDymic",
  stock: {
    repairBots: 150,
    defenceBots: 200,
    kamikazeBots: 0,
  },
};

const company2 = {
  companyName: "BotClouds",
  stock: {
    repairBots: 150,
    defenceBots: 200,
    kamikazeBots: 300,
  },
};

function getStockReport({ companyName, stock }) {
  let totalBotsAmount = 0;
  for (const value of Object.values(stock)) {
    totalBotsAmount += value;
  }
  console.log(`${companyName} has in stocks:
    ${totalBotsAmount}`);
}

getStockReport(company1);
getStockReport(company2);

// #9 ...rest
function createContact(partialContact) {
  return {
    list: "default",
    ...partialContact,
    id: generateId(),
    createdAt: Date.now(),
  };
}

console.log(
  createContact({
    firstName: "Simona",
    email: "simona@gmail.com",
    list: "friends",
  })
);

console.log(
  createContact({
    firstName: "Victoria",
    email: "victoria@gmail.com",
  })
);

function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

// #9 destructuring and writing to variable const

function createContact2({ firstName, email, list = "default" }) {
  return {
    firstName,
    email,
    list,
    id: generateId(),
    createdAt: Date.now(),
  };
}

const contactMark = {
  firstName: "Mark",
  email: "Mark@gmail.com",
  list: "friends",
};

const newContactMark = createContact2(contactMark);
console.log(newContactMark);

console.log(
  createContact2({
    firstName: "Kristy",
    email: "krysty@gmail.com",
  })
);

const newContactPeter = createContact2({
  firstName: "Peter",
  email: "peter@gmail.com",
});
console.log(newContactPeter);

function generateId2() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

// #10 from rest to spread
function transformUserName({ firstName, lastName, ...args }) {
  return {
    fullName: `${firstName} ${lastName}`,
    ...args,
  };
}

console.log(
  transformUserName({
    id: 1,
    firstName: "Jacob",
    lastName: "Brown",
    email: "j.brown@gmail.com",
    friendCount: 40,
  })
);

const newContactLisa = transformUserName({
  id: 1,
  firstName: "Lisa",
  lastName: "White",
  email: "l.white@gmail.com",
  friendCount: 70,
});
console.log(newContactLisa);
