const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
