// 1
function createProduct(obj, callback) {
  const product = {
    id: Number((Math.random(10000) * 10000).toFixed(0)),
    // id: Date.now(),
    ...obj,
  };
  callback(product);
}

function logProduct(product) {
  console.log(product);
}

function logTotalPrice(product) {
  console.log(
    `Total price of ${product.name}: ${product.price * product.quantity} UAH`
  );
}

createProduct({ name: "Apple", price: 30, quantity: 3 }, logProduct);
createProduct({ name: "Lemon", price: 50, quantity: 5 }, logTotalPrice);

// 2
/**
 *
 * @param {object} obj
 * @param {function} callback
 */

function createProduct2(obj, callback) {
  const product = {
    id: Number((Math.random(10000) * 10000).toFixed(0)),
    // id: Date.now(),
    ...obj,
  };
  callback(product);
}

function logProduct2(product) {
  console.log(product);
}

function logTotalPrice2(product) {
  console.log(
    product,
    `Total price of ${product.name}: ${product.price * product.quantity} UAH`
  );
}

function doubleQuantity({ quantity }) {
  quantity = quantity * 2;
  console.log(quantity);
}

const object = { name: "Mango", price: 30, quantity: 3 };

createProduct2(object, logProduct2);
createProduct2(object, logTotalPrice2);

createProduct2(object, doubleQuantity);

// 3

const TRANSACTION_LIMIT = 1000;

const account = {
  username: "Jacob",
  balance: 400,
  withdrow(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT || amount > this.balance) {
      onError({
        status: "Error❌",
        message:
          "The limit is exceeded or there are insufficient founds in your account!",
      });
    } else {
      this.balance -= amount;
      onSuccess({
        status: "Success✅",
        message: `The operation is successful! The balance in your account is ${this.balance}`,
      });
    }
  },
  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT || amount <= 0) {
      onError({
        status: "Error❌",
        message: "The limit is exceeded or the sum is zero or less!",
      });
    } else {
      this.balance += amount;
      onSuccess({
        status: "Success✅",
        message: `The operation is successful! Your account has been topped up by UAN ${amount}. The balance in your account is ${this.balance}`,
      });
    }
  },
};

function hadleSuccess({ status, message }) {
  console.log(`${status}: ${message}`);
}

function handleError({ status, message }) {
  console.log(`${status}: ${message}`);
}

account.withdrow(2000, hadleSuccess, handleError);
account.withdrow(600, hadleSuccess, handleError);
account.withdrow(300, hadleSuccess, handleError);
account.deposit(3000, hadleSuccess, handleError);
account.deposit(700, hadleSuccess, handleError);
account.deposit(900, hadleSuccess, handleError);
