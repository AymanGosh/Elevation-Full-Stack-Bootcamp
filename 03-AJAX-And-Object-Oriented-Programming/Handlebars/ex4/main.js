const animals = [
  "Rabbit",
  "Giraffe",
  "Kangaroo",
  "Whale",
  "Seagull",
  "Caterpie",
];

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"];

const source = $("#animals-template").html();
const template = Handlebars.compile(source);
const newHTML = template({ names: animals });
$(".animals").append(newHTML);
