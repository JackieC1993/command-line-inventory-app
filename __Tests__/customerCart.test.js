const { index, create, update } = require("../src/controller.js");

const customerCart = require("../__Tests__/sampleTestData.json");

describe ("Generating view of objects from Customer Cart", () => {
  test("Checks for valid array output", () => {
    expect(index(customerCart)).toEqual([
      'item: cat_wand | price: 3.00 | size: os | inStock: true',
      'item: cat_yarn | price: 6.00 | size: m | inStock: false',
      'item: cat_playtoy | price: 1.00 | size: os | inStock: true'
    ]);
  });
});

describe("Generating view of items in stock", () => {
  test("Checks for valid in-stock items", () => {
    expect(create(customerCart)).toEqual([
      'item: cat_wand | price: 3.00 | size: os',
      'item: cat_playtoy | price: 1.00 | size: os'
    ]);
  });
});

describe("Generating filtered view of items by condition of item", () => {
  test("Checks for appropriate filter output", () => {
    expect(update(customerCart, "os")).toEqual([
      {
        item: 'cat_wand',
        price: 3.00,
        size: 'os',
        inStock: true
      },
      {
        item: 'cat_playtoy',
        price: 1.00,
        size: 'os',
        inStock: true
      }
    ]);
  });
});
