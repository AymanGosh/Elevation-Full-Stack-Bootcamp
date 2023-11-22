$.get(
  "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
  function (result) {
    console.log(result);
  }
);

//we can use `title` instead of `isbn` - that's allowed according to this application's programming interface!
$.get(
  "https://www.googleapis.com/books/v1/volumes?q=title:name%20of%20the%20wind",
  function (result) {
    console.log(result.items[0].volumeInfo.description); //prints A lot of description Text
  }
);

$.ajax({
  method: "GET",
  url: "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
  success: function (data) {
    console.log(data);
  },
  error: function (xhr, text, error) {
    console.log(text);
  },
});

const API_KEY = `v6NP6FvMrt7gnBBQUXpQs7Q0Uyejg8Rl`;

//javascript, jQuery
var xhr = $.get(
  `http://api.giphy.com/v1/gifs/search?q=cat&api_key=${API_KEY}&limit=5`
);
xhr.done(function (data) {
  console.log("success got data", data);
  $("body").append(`
  <iframe src="${data.data[0].embed_url}">
  `);
});
