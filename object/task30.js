// Personal account in the internet bank
// There is only two type of transactions: put(deposit) money and take(whitdraw) money

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
Object.freeze(Transaction);

// Each transaction is object which has propertis: id, type, amount

const account = {
  //Current account balance
  balance: 0,
  // History of transactions
  transactions: [],
  // Method creates and return a transaction object by receiving the amount and type of the transaction
  createTransaction(amount, type) {
    return {
      id: Date.now(),
      amount,
      type,
    };
  },
  /* Method which receives the amount of a transaction and adds it into balance
  Call createTransaction() for creating the transaction object
  After the method adds this object into the transaction history
  */
  deposit(amount) {
    const itemDeposit = this.createTransaction(amount, Transaction.DEPOSIT);
    console.log(itemDeposit);
    this.transactions.push(itemDeposit);
    this.balance += itemDeposit.amount;
    alert(
      `Your balance was topped up by ${itemDeposit.amount}. Your balans is ${this.balance}`
    );
  },
  /* Method wich make withdrawing from balans by receiving the needed amount trasaction
  Call createTransaction() for creating the transaction object
  After the method adds this object into the transaction history
  If the needed amount is more then the current balans, that shows alert about "Sorry, you do not have enough money in the balans"
  */
  withdraw(amount) {
    if (amount > this.balance || this.balance <= 10) {
      alert("Sorry, you do not have enough money in your balans😢");
    } else {
      const itemWithdraw = this.createTransaction(amount, Transaction.WITHDRAW);
      console.log(itemWithdraw);
      this.transactions.push(itemWithdraw);
      this.balance -= itemWithdraw.amount;
      alert(
        `Withdrawal of funds in the amount of ${itemWithdraw.amount}. Your balans is ${this.balance}`
      );
    }
  },
};

// console.log(account.createTransaction(1000, "deposit"));
account.deposit(1000);
account.deposit(700);
// account.deposit(3000);

account.withdraw(500);
// account.withdraw(7000);

console.log(account.transactions);

console.log(account.balance);
