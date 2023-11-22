const menuData = {
  menu: [
    { name: "Google", link: "http://google.com", socialNetwork: true },
    { name: "Facebook", link: "http://facebook.com", socialNetwork: false },
    { name: "Instagram", link: "http://nstagram.com", socialNetwork: true },
    { name: "Twitter", link: "http://twitter.com", socialNetwork: true },
  ],
};

const source = $("#menu-template").html();
const template = Handlebars.compile(source);
const newHTML = template(menuData);

// append our new html to the page
$(".menu").append(newHTML);
