const express = require("express");

const router = express.Router();


router.post("/add-user", (req, res, next) => {
  const username = req.body["username"];
  console.log("User ", username, " added");
  res.redirect("/");
  res.end();
});

module.exports = router;
