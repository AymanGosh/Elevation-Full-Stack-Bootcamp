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

  // Getters
  get picture() {
    return this._picture;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get city() {
    return this._city;
  }

  get state() {
    return this._state;
  }

  get friends() {
    return [...this._friends];
  }

  // Setters
  set picture(newPicture) {
    this._picture = newPicture;
  }

  set firstName(newFirstName) {
    this._firstName = newFirstName;
  }

  set lastName(newLastName) {
    this._lastName = newLastName;
  }

  set city(newCity) {
    this._city = newCity;
  }

  set state(newState) {
    this._state = newState;
  }

  set friends(newFriends) {
    this._friends = [...newFriends];
  }
}
