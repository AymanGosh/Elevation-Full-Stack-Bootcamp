const API_KEY = `v6NP6FvMrt7gnBBQUXpQs7Q0Uyejg8Rl`;

$.get(`https://random-word-api.herokuapp.com/word`)
  .then(function (data) {
    console.log(data);
    const giphyPromise = $.get(
      `http://api.giphy.com/v1/gifs/search?q=${data}&api_key=${API_KEY}&limit=5`
    );

    const bookPromise = $.get(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${data}`
    );
    return Promise.all([giphyPromise, bookPromise]);
  })
  .then(function (promisesResult) {
    const [giphyData, bookData] = promisesResult;
    $("body").append(`
    <iframe src="${giphyData.data[0].embed_url}">
    `);
    $("body").append(`<div>${bookData.items[0].volumeInfo.title}</div>`);
    console.log(bookData);
  })
  .catch((err) => alert(err));
