const inform = console.log();
const { nanoid } = require("nanoid");
const chalk = require("chalk");
const inventory = require("../data/data.json");

function index(customerCart) {
  return customerCart.map(
    (eachItem) =>
      `item: ${eachitem.item} price: ${eachItem.price} size ${eachItem.size} inStock ${eachItem.inStock}`
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

