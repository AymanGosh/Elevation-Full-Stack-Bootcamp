$.ajax({
  method: "GET",
  url: "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
  success: function (data) {
    console.log(data);
  },
  error: function (err) {
    console.log(err);
  },
});
// $.ajax({
//   method: "GET",
//   url: "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
//   success: function (data) {
//     console.log(data);
//   },
//   error: function (xhr, text, error) {
//     console.log(text);
//   },
// });
