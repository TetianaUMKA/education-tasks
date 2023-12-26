// call stack
function createProduct(obj) {
  obj.id = Math.round(Math.random() * 1000); // we changed incoming data
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
  const product = { id: Math.round(Math.random() * 1000), ...obj }; // we created new object because we used destructuring and use spread
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
let textileProducts = [];
let foodProducts = [];
let otherProduts = [];
function createProduct3(obj) {
  const product = { id: Math.round(Math.random() * 1000), ...obj }; // created new object because we used destructuring and use spread
  switch (product.productType) {
    case "textile":
      return textileProducts.push(product);
    case "food":
      return foodProducts.push(product);
    default:
      return otherProduts.push(product);
  }
}

console.log(textileProducts, foodProducts, otherProduts);

createProduct3({
  name: "👚",
  productType: "textile",
  price: 560,
  quantity: 12,
});
createProduct3({
  name: "👗",
  productType: "textile",
  price: 2300,
  quantity: 6,
});
createProduct3({
  name: "👙",
  productType: "textile",
  price: 1300,
  quantity: 8,
});

createProduct3({ name: "🌽", productType: "food", price: 30, quantity: 140 });
createProduct3({ name: "🍅", productType: "food", price: 89, quantity: 58 });
createProduct3({ name: "🥟", productType: "food", price: 63, quantity: 40 });

createProduct3({
  name: "🏺",
  productType: "souvenir",
  price: 2,
  quantity: 730,
});

function addToBasket(product) {}
