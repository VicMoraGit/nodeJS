const express = require("express");
const path = require("path");
const dirname = require("./util/path");
const adminRouter = require("./routes/admin");
const usersRoute = require("./routes/users");

const app = express();
app.listen(3000);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(dirname, "public")));
app.use(adminRouter);

app.use(usersRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(dirname, "views", "404.html"));
});
