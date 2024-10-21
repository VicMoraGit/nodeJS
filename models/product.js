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
  constructor(title, imgUrl, description, price) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile((products) => {
      this.id = Math.random().toString();
      products.push(this);
      fs.writeFile(productsPath, JSON.stringify(products), (err) => {});
    });
  }

  static findById(id, callback) {
    getProductsFromFile((products) => {
      const product = products.find((product) => product.id === id);
      callback(product);
    });
  }

  static fetchAll(callback) {
    getProductsFromFile(callback);
  }
};
