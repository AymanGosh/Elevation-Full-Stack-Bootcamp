const getRandomWord = function () {
  let words = [
    "Bonanza",
    "Elusive",
    "Hindrance",
    "Astute",
    "Polaroid",
    "Phonic",
    "Yonder",
  ];

  // using setTimeout to simulate an async operation that takes time
  setTimeout(() => {
    return words[Math.floor(Math.random() * words.length)];
  }, 1000);
};

//console.log(getRandomWord()); //undefined

// So how do we solve this problem?
// Answer:
// Using a callback!

const getRandomWord2 = function (callback) {
  let words = [
    "Bonanza",
    "Elusive",
    "Hindrance",
    "Astute",
    "Polaroid",
    "Phonic",
    "Yonder",
  ];
  setTimeout(() => {
    callback(words[Math.floor(Math.random() * words.length)]);
  }, 1000);
};

getRandomWord2((randomWord) => {
  console.log(randomWord); //Polaroid
});
