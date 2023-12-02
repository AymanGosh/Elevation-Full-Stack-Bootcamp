const getRandomWord = function (callback) {
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

const getSynonyms = function (word, callback) {
  let thesauraus = {
    Absolute: ["Definitive", "Certain", "Sure", "Unequivocal"],
    Astute: ["Sharp", "Poignant", "Clever"],
    Azure: ["Blue", "Cyan", "Sky-blue"],
    Bright: ["Luminous", "Brilliant"],
    Bonanza: ["Plethora", "Smorgasboard", "Copious", "Plenty"],
    Elusive: ["Slick", "Slippery", "Ethereal", "Loose"],
    Erode: ["Destroy", "Wear out", "Tarnish"],
    Hindrance: ["Bother", "Disturbance", "Problematic"],
    Phonic: ["Soundful"],
    Ploy: ["Plan", "Ruse"],
    Polaroid: ["Photograph"],
    Yap: ["Bark", "Blab", "Chatter"],
    Yonder: ["There", "Away", "Far", "Afar"],
  };

  setTimeout(() => {
    callback(thesauraus[word]);
  }, 1000);
};

const getSentiment = function (word, callback) {
  let wordSentiment = {
    Definitive: 1,
    Sharp: 1,
    Blue: 0,
    Luminous: 1,
    Plethora: 1,
    Slick: -1,
    Destroy: -1,
    Bother: -1,
    Soundful: 0,
    Plan: 0,
    Photograph: 0,
    Bark: -1,
    There: -1,
  };
  setTimeout(() => {
    callback(JSON.stringify(wordSentiment[word]));
  }, 1000);
};

const getSentimentDescription = function (sentiment) {
  return sentiment === 1
    ? "Positive"
    : sentiment === -1
    ? "Negative"
    : "Neutral";
};

//Callback Hell
// getRandomWord -> getSynonyms -> getSentiment -> getSentimentDescription
// why when we use arrow function the w will be always equal to w in the lexical scope?
getRandomWord(function (w1) {
  // console.log(w1);
  getSynonyms(w1, function (w2) {
    //console.log(w2[0]);
    getSentiment(w2[0], function (w3) {
      const sentiment = getSentimentDescription(w3);
      const txt = `The word ${w1} has a synonym ${w2[0]} which has a ${sentiment} sentiment`;
      console.log(txt);
    });
  });
});
