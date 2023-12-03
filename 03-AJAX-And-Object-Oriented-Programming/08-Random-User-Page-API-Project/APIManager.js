//This is the class that will manage all your APIs
class APIManager {
  constructor() {
    if (!APIManager.instance) {
      // Your singleton initialization code goes here
      this._data = {};
      // ... other properties and methods
      APIManager.instance = this;
    }
    return APIManager.instance;
  }

  fetch(API) {
    return $.ajax({
      method: "GET",
      url: API,
      error: function (xhr, text, error) {
        console.log(text);
      },
    });
  }

  fetchAll() {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    const usersPromise = this.fetch(RANDOM_USER_API);
    const quotePromise = this.fetch(RANDOM_KANYE_QUOTE_API);
    const pokemonPromise = this.fetch(POKE_API + randomNumber);
    const ipsumPromise = this.fetch(BACON_IPSUM_API);
    Promise.all([
      usersPromise,
      quotePromise,
      pokemonPromise,
      ipsumPromise,
    ]).then((promiseResults) => {
      let [users, quoteData, pokemon, ipsum] = promiseResults;
      this.saveUserData(users);
      this.saveQuote(quoteData);
      this.saveIpsum(ipsum);
      this.savePokemon(pokemon);
      enableDisplayBtn();
    });
  }

  savePokemon(pokemonData) {
    const img =
      pokemonData.sprites.other.dream_world.front_default ||
      pokemonData.sprites.other.home.front_shiny ||
      pokemonData.sprites.front_default;
    const pokemon = {
      name: pokemonData.name,
      image: img,
    };
    this._data.pokemon = pokemon;
  }

  saveIpsum(ipsum) {
    this._data.ipsum = ipsum[0];
  }

  saveQuote(quoteData) {
    this._data.quote = quoteData.quote;
  }

  saveUserData(users) {
    const userData = User.normalizeApiData(users.results);
    const user = new User(userData);
    this._data.user = user;
  }

  get data() {
    return this._data;
  }
}
