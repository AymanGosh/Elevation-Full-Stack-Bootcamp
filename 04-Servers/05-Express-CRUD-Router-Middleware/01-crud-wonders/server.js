const express = require("express");
const path = require("path");
const api = require("./server/routes/api"); /****** separation of concerns************************** */

const app = express();

/****send our HTML**************************** */
app.use(express.static(path.join(__dirname, "dist")));
/****send our HTML**************************** */
app.use(express.static(path.join(__dirname, "node_modules")));

/****POST**************************** */
app.use(express.json());
/****POST**************************** */
app.use(express.urlencoded({ extended: false }));

/**** separation of concerns**************************** */
app.use("/", api);

const port = 1337; //because why not
app.listen(port, function () {
  console.log(`Server running on ${port}`);
});
