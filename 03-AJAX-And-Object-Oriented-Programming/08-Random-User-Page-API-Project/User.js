class User {
  constructor(userData) {
    const { picture, firstName, lastName, city, state, friends } = userData;

    this._picture = picture;
    this._firstName = firstName;
    this._lastName = lastName;
    this._city = city;
    this._state = state;
    this._friends = [...friends];
  }
  get getUser() {
    return {
      picture: this._picture,
      firstName: this._firstName,
      lastName: this._lastName,
      city: this._city,
      state: this._state,
      friends: [...this._friends],
    };
  }
  static normalizeApiData(users) {
    const picture = users[0].picture.large;
    const firstName = users[0].name.first;
    const lastName = users[0].name.last;
    const city = users[0].location.city;
    const state = users[0].location.state;
    const friends = [...users].map((u) => {
      return { firstName: u.name.first, lastName: u.name.last };
    });
    friends.shift();
    return { picture, firstName, lastName, city, state, friends };
  }
}
