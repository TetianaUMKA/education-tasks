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
