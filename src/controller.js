const inform = console.log();
const { nanoid } = require("nanoid");
const chalk = require("chalk");
const inventory = require("../data/data.json");

function index(customerCart) {
  return customerCart.map(
    (eachItem) =>
      `item: ${eachitem.item} price: ${eachItem.price} size: ${eachItem.size} inStock: ${eachItem.inStock}`
  );
}

function show(customerCart, item) {
  let singleItem = customerCart.filter((items) => items.name === item);
  for (let info of singleItem) {
    return `${chalk.blue(info.item)} ${chalk.yellow(info.price)} ${chalk.cyan(
      info.size
    )} ${chalk.red(info.inStock)}`;
  }
}

function create(customerCart, item) {
  const cart = inventory.find((specificItem) => specificItem.name === item);
  const newPurchase = {
    id: `${nanoid(6)}`,
    item: cart.item,
    price: cart.price,
    size: cart.size,
    inStock: cart.inStock,
  };
  customerCart.push(newPurchase);
  return customerCart;
}

function update(customerCart, itemId, itemPurchase) {
  const index = customerCart.findIndex((purchase) => purchase.id === itemId);
  const updateCart = inventory.find(
    (purchase) => purchase.name === itemPurchase
  );
  if (index > -1) {
    customerCart[index].item = itemPurchase;
    customerCart[index].price = updateCart.price;
    customerCart[index].size = updateCart.size;
    customerCart[index].inStock = updateCart.inStock;
    return customerCart;
  }
}

function destroy(customerCart, itemName) {
  const index = customerCart.findIndex((item) => itemName === item.name);
  if (index > -1) {
    customerCart.splice(index, 1);
    return customerCart;
  } else {
    return customerCart;
  }
}

function deleteCart(customerCart) {
  if (customerCart.length > 0) {
    customerCart.splice(0, customerCart.length);
    return customerCart;
  }
}

function total(customerCart) {
  let filterPrice = customerCart.map((amount) => amount.price);
  return filterPrice.reduce((prev, curr) => prev + curr);
}
module.exports = { index, show, create, update, destroy, deleteCart, total };
