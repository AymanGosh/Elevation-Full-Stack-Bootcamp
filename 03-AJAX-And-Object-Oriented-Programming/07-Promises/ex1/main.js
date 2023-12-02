const API_KEY = `v6NP6FvMrt7gnBBQUXpQs7Q0Uyejg8Rl`;

$.get(`https://random-word-api.herokuapp.com/word`)
  .then(function (data) {
    // return $.get(
    //   `http://api.giphy.com/v1/gifs/search?q=${data}&api_key=${API_KEY}&limit=5`
    // );
    console.log(data);
    return $.get(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${data}`
    );
  })
  .then(function (data) {
    //   $("body").append(`
    // <iframe src="${data.data[0].embed_url}">
    // `);
    console.log(data);
  })
  .catch((err) => alert(err));
