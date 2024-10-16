const express = require("express");
const path = require("path");
const dirname = require("../util/path");
const router = express.Router();

router.get("/users", (req, res, next) => {
  res.sendFile(path.join(dirname, "views", "users.html"));
});

router.get("/", (req, res, next) => {
  res.sendFile(path.join(dirname, "views", "home.html"));
});

module.exports = router;
