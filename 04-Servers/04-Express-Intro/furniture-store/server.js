const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

const store = [
  { name: "table", inventory: 3, price: 800 },
  { name: "chair", inventory: 16, price: 120 },
  { name: "couch", inventory: 1, price: 1200 },
  { name: "picture frame", inventory: 31, price: 70 },
];

app.get("/sale", function (req, res) {
  const params = req.query;
  const isAdmin = params.admin === "true" ? true : false;
  if (!isAdmin) {
    res.send(store);
  }
  const MIN_ITEMS = 10;

  let arrayCopy = JSON.parse(JSON.stringify(store));
  arrayCopy.map((item) => {
    if (item.inventory >= MIN_ITEMS && isAdmin) {
      item.price /= 2;
    }
    return item;
  });
  res.send(arrayCopy);
});
app.get("/buy/:name", function (req, res) {
  const name = req.params.name;
  let newItem = { name: "null", inventory: null, price: null };
  store.forEach((item) => {
    if (item.name === name) {
      item.inventory--;
      newItem = item;
    }
  });
  res.send(newItem);
});
app.get("/priceCheck/:name", function (req, res) {
  const name = req.params.name;
  const searchenItem = store.find((item) => item.name === name);
  res.send({ price: searchenItem?.price || null });
});

app.get("/", function (req, res) {
  res.send("Server is up and running smoothly");
});

const PORT = 3000;
app.listen(PORT, function () {
  console.log("Running server");
});

//http://localhost:3000/
