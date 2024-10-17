const fs = require("fs");
const path = require("path");
const dirname = require("../util/path");

const productsPath = path.join(dirname, "data", "products.json");
const getProductsFromFile = (callback) => {
  fs.readFile(productsPath, (err, data) => {
    if (err || data.length === 0) {
      callback([]);
    } else {
      callback(JSON.parse(data));
    }
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(productsPath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(callback) {
    getProductsFromFile(callback);
  }
};
