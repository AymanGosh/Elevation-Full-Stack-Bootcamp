class Renderer {
  constructor() {
    if (!Renderer.instance) {
      // Your singleton initialization code goes here
      const userSource = DOMElements.templates.user.html();
      this.userTemplate = Handlebars.compile(userSource);

      const friendsSource = DOMElements.templates.friends.html();
      this.friendsTemplate = Handlebars.compile(friendsSource);

      const quoteSource = DOMElements.templates.quote.html();
      this.quoteTemplate = Handlebars.compile(quoteSource);

      const pokemonSource = DOMElements.templates.pokemon.html();
      this.pokemonTemplate = Handlebars.compile(pokemonSource);

      const aboutMeSource = DOMElements.templates.aboutMe.html();
      this.aboutMeTemplate = Handlebars.compile(aboutMeSource);

      // ... other properties and methods
      Renderer.instance = this;
    }
    return Renderer.instance;
  }
  render(data) {
    const user = data.user;
    const friends = data.user.friends;
    const quote = data.quote;
    const pokemon = data.pokemon;
    const aboutMeData = data.ipsum;

    this.renderUser(user);
    this.renderFriends(friends);
    this.renderQuote(quote);
    this.renderPokemon(pokemon);
    this.renderAboutMe(aboutMeData);
  }
  renderUser(user) {
    const newHTML = this.userTemplate(user);
    DOMElements.containers.user.append(newHTML);
  }

  renderFriends(friends) {
    const newHTML = this.friendsTemplate({ friends });
    DOMElements.containers.friends.append(newHTML);
  }

  renderQuote(quote) {
    const newHTML = this.quoteTemplate({ quote });
    DOMElements.containers.quote.append(newHTML);
  }

  renderPokemon(pokemon) {
    const newHTML = this.pokemonTemplate(pokemon);
    DOMElements.containers.pokemon.append(newHTML);
  }

  renderAboutMe(aboutMeData) {
    const newHTML = this.aboutMeTemplate({ aboutMeData });
    DOMElements.containers.aboutMe.append(newHTML);
  }

  empty() {
    DOMElements.containers.user.empty();
    DOMElements.containers.friends.empty();
    DOMElements.containers.quote.empty();
    DOMElements.containers.pokemon.empty();
    DOMElements.containers.aboutMe.empty();
  }
}
