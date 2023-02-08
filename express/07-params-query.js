const express = require("express");
const app = express();

const { products } = require("./data");
app.get("/", (req, res) => {
  res.send(`<div>
  <h1>Home page</h1>
  <a href="/api/products">products</a>
  </div>`);
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

// URL Params

//Route Parameters
app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === parseInt(productID)
  );
  if (singleProduct) {
    return res.json(singleProduct);
  }
  return res.status(404).send("<h1>Product does not exist</h1>");
});

// Query Params
app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  console.log(search);
  let sortedProducts = [...products];
  sortedProducts = sortedProducts.filter((product) => {
    return product.name.startsWith(search);
  });
  console.log(sortedProducts);
  if (limit) {
    sortedProducts = sortedProducts.slice(0, parseInt(limit));
  }
  if (sortedProducts.length >= 1) {
    return res.status(200).json(sortedProducts);
  }
  return res.status(200).json({ success: true, data: [] });
});
app.listen("5000", () => {
  console.log("Server is listening on port 5000");
});
