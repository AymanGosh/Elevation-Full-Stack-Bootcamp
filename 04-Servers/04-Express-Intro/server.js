const express = require("express");
const app = express();

app.get("/", function (request, response) {
  console.log("Someone hass come into the server. Brace yourselves.");
  response.send("Ending the cycle, thanks for visiting");
});

const port = 3000;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});

//http://localhost:3000/
