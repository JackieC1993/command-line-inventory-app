const inform = console.log();
const { nanoid } = require("nanoid");
const chalk = require("chalk");
const inventory = require("../data/data.json");

function index(customerCart) {
  return customerCart.map(
    (inventory) =>
      `item: ${inventory.item} price: ${inventory.price} size: ${inventory.size} inStock: ${inventory.inStock}`
  );
}

function show(customerCart, item) {
  let matchingItems = customerCart.filter((inventory) => inventory[item] === item);
  let result = "";
  for (let inventory of matchingItems) {
    return `${chalk.blue(inventory.item)} $${chalk.yellow(inventory.price.toFixed(2))} ${chalk.cyan(
      inventory.size
    )} ${chalk.red(inventory.inStock)}`;
  }
  return result;
}

function create(customerCart, item) {
  const cart = inventory.find((specificItem) => specificItem[item] === item);
  const newPurchase = {
    id: nanoid(4),
    item: cart['item'],
    price: cart['price'],
    size: cart['size'],
    inStock: cart['inStock'],
  };
  customerCart.push(newPurchase);
  console.log(cart)
  return customerCart;
}

function update(data,purchase,itemId,itemPurchase) {


  const index = data.findIndex((item) => item.item === action);



  if (index !== -1) {

      data[index].item = action;
      data[index].price = purchase;
      data[index].size = itemId;
      data[index].inStock = itemPurchase;
      writeJSONFile(data)

      inform("Cart successfully updated");
      return data;
  } else {

      inform("Item not found. No action taken");
      return data;
  }
}

function destroy(customerCart, itemName) {
  const index = customerCart.findIndex((item) => itemName === item.item);
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
