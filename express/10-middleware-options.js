const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
const morgan = require("morgan");

// app.use([logger,  authorize]);
app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.send("<h1>Home</h1>");
});

app.get("/about", (req, res) => {
  console.log(req.user);
  res.send("<h1>About</h1>");
});

app.get("/api/items", (req, res) => {
  // console.log(req.user);
  res.send("<h1>Items</h1>");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
