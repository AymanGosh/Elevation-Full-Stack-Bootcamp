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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(words[Math.floor(Math.random() * words.length)]);
    }, 1000);
  });
};

const getSynonyms = function (word) {
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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(thesauraus[word]);
    }, 1000);
  });
};

const getSentiment = function (word) {
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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(wordSentiment[word]);
    }, 1000);
  });
};

// No need for promises here
const getSentimentDescription = function (sentiment) {
  return sentiment === 1
    ? "Positive"
    : sentiment === -1
    ? "Negative"
    : "Neutral";
};

let word, Synonyms, Sentiment;

getRandomWord()
  .then(function (w) {
    word = w;
    return getSynonyms(w);
  })
  .then(function (w1) {
    Synonyms = w1[0];
    return getSentiment(w1[0]);
  })
  .then(function (w2) {
    Sentiment = getSentimentDescription(w2);
    console.log(word, Synonyms, Sentiment);
  });
