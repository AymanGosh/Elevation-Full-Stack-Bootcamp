const items = [
  { item: "cheese", price: 15 },
  { item: "arak", price: 68 },
  { item: "hummus", price: 15 },
  { item: "pita", price: 5 },
];

// turn our "template" into html
const source = $("#store-template").html();

// compile our template html using handlebars
const template = Handlebars.compile(source);

const render = function (items) {
  for (let item of items) {
    // fill our template with information
    let newHTML = template(item);
    // append our new html to the page
    $(".items").append(newHTML);
  }
};

render(items);
