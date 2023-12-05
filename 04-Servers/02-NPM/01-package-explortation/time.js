const moment = require("moment");
const urllib = require("urllib");
const axios = require("axios");

let timeNow = new Date();
//console.log(timeNow);

let formattedTimeNow = moment().format("MMMM Do, YYYY");
//console.log(formattedTimeNow); //January 3rd, 2017

// URL for a sample API
const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

// Making a GET request
axios
  .get(apiUrl)
  .then((response) => {
    console.log("Response status code:", response.status);
    console.log("Data:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
