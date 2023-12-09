const express = require("express");
const app = express();
const path = require("path");

const data = {
  8112: {
    title: "Name of the Wind",
    author: "Patrick Rothfuss",
  },
  9121: {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
  },
  1081: {
    title: "The Giver",
    author: "Lois Lowry",
  },
};

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.get("/books/:bookID", function (request, response) {
  let bookID = request.params.bookID;
  response.send(data[bookID]);
});

app.get("/error", function (request, response) {
  console.log("Someone has come into the server. Brace yourselves.");
  //response.send("Ending the cycle, thanks for visiting");
  //response.sendFile(path.join(__dirname, "error.html"));
  response.sendFile(path.join(__dirname, "dist", "error.html"));
});

app.get("/maps", function (request, response) {
  response.send("Here's some stuff related to maps");
});

app.get("/shoobi", function (request, response) {
  response.send("This here is the shoobi *route*");
});

app.get("/routeWithOptionalParameters", (request, response) => {
  let params = request.query;
  response.send(params);
});

const port = 3000;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});

//http://localhost:3000/
//http://localhost:3000/routeWithOptionalParameters/?name=Ayman&car=BMW

//http://localhost:3000/details/?zipcode=6863155&city=Ankh Morpork&middleName=Wilfred
