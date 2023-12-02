/*
Now let’s look at a bit of a different scenario.
In this case, we will get a random word and for that word we will want to print it’s sentiment and its synonyms.
*/
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
    Absolute: -1,
    Astute: -1,
    Azure: 1,
    Bright: 1,
    Bonanza: 1,
    Elusive: -1,
    Erode: 0,
    Hindrance: 0,
    Phonic: 0,
    Ploy: 0,
    Polaroid: -1,
    Yap: 1,
    Yonder: -1,
  };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(wordSentiment[word]);
    }, 1000);
  });
};
const getSentimentDescription = function (sentiment) {
  return sentiment === 1
    ? "Positive"
    : sentiment === -1
    ? "Negative"
    : "Neutral";
};
let word;
getRandomWord()
  .then(function (w) {
    word = w;
    let SynonymsPromise = getSynonyms(w);
    let SentimentPromise = getSentiment(w);
    return Promise.all([SynonymsPromise, SentimentPromise]);
  })
  .then(function (promiseResults) {
    let [synonyms, sentiment] = promiseResults;
    const sentimentDescription = getSentimentDescription(sentiment);
    console.log(word, sentimentDescription, synonyms[0]);
  });

// let word = null;
// let synonyms = null;

// getRandomWord()
//   .then((wordParam) => {
//     word = wordParam;
//     return getSynonyms(word);
//   })
//   .then((synonymsParam) => {
//     synonyms = synonymsParam;
//     return getSentiment(word);
//   })
//   .then((sentiment) => {
//     const sentimentDescription = getSentimentDescription(sentiment);
//     console.log(`The word ${word} has synonyms ${synonyms}
//         and a ${sentimentDescription} sentiment`);
//   });
