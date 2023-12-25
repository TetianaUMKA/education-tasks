// call stack
function createProduct(obj) {
  obj.id = Math.round(Math.random() * 1000); // we change incoming data
  logProduct(obj);
  createProductQuality(obj);
  logTotalPrice(obj);
}

const logProduct = (product) => console.log(`Product ${product.name}`);

const createProductQuality = (product) => {
  product.reviews = "100% positive";
  return console.log(product);
};

const logTotalPrice = (product) =>
  console.log(product.quantity * product.price);

createProduct({ name: "🍎", price: 20, quantity: 3 });
createProduct({ name: "🍋", price: 25, quantity: 5 });

// callback

function createProduct2(obj, callback) {
  const product = { id: Math.round(Math.random() * 1000), ...obj }; // created new object because we used destructuring and use spread
  callback(product);
  console.log(product);
  console.log("Incoming data stayed without changing", obj);
}

const logProduct2 = (product) => console.log(`Product ${product.name}`);

const createProductQuality2 = (product) => (product.reviews = "100% positive");

const logTotalPrice2 = (product) =>
  console.log(product.quantity * product.price);

createProduct2({ name: "🥭", price: 180, quantity: 4 }, logProduct2);
createProduct2({ name: "🍑", price: 40, quantity: 9 }, createProductQuality2);
createProduct2({ name: "🥥", price: 120, quantity: 2 }, logTotalPrice2);

//
let productTextile = {};
function createProduct3(obj) {
  productTextile = { id: Math.round(Math.random() * 1000), ...obj }; // created new object because we used destructuring and use spread
  console.log(productTextile);
  console.log("Incoming data stayed without changing", obj);
}

function actProductTextile(callback) {}

createProduct3({ name: "👚", price: 560, quantity: 2 });
createProduct3({ name: "👗", price: 2300, quantity: 5 });
createProduct3({ name: "👙", price: 1300, quantity: 8 });
