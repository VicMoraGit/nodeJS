const Product = require("../models/product");

exports.getAddProducts = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true,
  });
};

exports.getEditProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Edit Product",
    path: "/admin/edit-product",
  });
};

exports.postAddProducts = (req, res, next) => {
  const title = req.body.title;
  const imgUrl = req.body.imgUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imgUrl, description, price);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Products",
      path: "admin/products",
    });
  });
};
