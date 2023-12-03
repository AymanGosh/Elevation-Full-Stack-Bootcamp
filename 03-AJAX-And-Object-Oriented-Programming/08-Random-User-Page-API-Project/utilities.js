const DOMElements = {
  containers: {
    user: $(".user-container"),
    friends: $(".friends-container"),
    quote: $(".quote-container"),
    pokemon: $(".pokemon-container"),
    aboutMe: $(".about-me-container"),
  },
  templates: {
    user: $("#user-template"),
    friends: $("#friends-template"),
    quote: $("#quote-template"),
    pokemon: $("#pokemon-template"),
    aboutMe: $("#about-me-template"),
  },
  buttons: {
    displayButton: $("#displayButton"),
  },
};

const enableDisplayBtn = function () {
  DOMElements.buttons.displayButton.prop("disabled", false);
  DOMElements.buttons.displayButton.css("cursor", "pointer");
  DOMElements.buttons.displayButton.css("background-color", CSS_COLORS.green);
};

const disableDisplayBtn = function () {
  DOMElements.buttons.displayButton.prop("disabled", true);
  DOMElements.buttons.displayButton.css("cursor", "not-allowed");
  DOMElements.buttons.displayButton.css("background-color", CSS_COLORS.gray);
};
