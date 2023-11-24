class Animal {
  constructor(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    Animal.animalNum++;
  }

  giveBirth(name) {
    console.log("Boom. Birthed " + name);
  }
  static getInfo() {
    console.log("Animals are great:" + Animal.animalNum);
  }
}
Animal.animalNum = 0;
// const cat = new Animal("Puss", 4);

// cat.giveBirth("Dolly"); // prints "Boom. Birthed Dolly"
// Animal.getInfo();
/**********************************************/
class Vehicle {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this._speed = speed;
  }

  set speed(speed) {
    if (speed < 0) {
      return console.log("Speed must be positive");
    }
    this._speed = speed;
  }
  get speed() {
    return this._speed;
  }
}
const c = new Vehicle();
c.x = 3;
c.y = 1;
c.speed = -2; //will invoke the set method, at this point, we'll get the console log saying speed needs to be positive
console.log(c.speed); // will invoke the get method,prints undefined

c.speed = 10;
console.log(c.speed); // 10, but will print prints undefined if there are no getter,
