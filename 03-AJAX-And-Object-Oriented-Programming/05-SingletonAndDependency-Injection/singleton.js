// ex1 in oop
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      // Your singleton initialization code goes here
      this.someProperty = "Some value";
      // ... other properties and methods
      Singleton.instance = this;
    }

    return Singleton.instance;
  }

  // Example method of the singleton
  someMethod() {
    console.log("Some method");
  }
}

// Usage
const singletonInstance1 = new Singleton();
const singletonInstance2 = new Singleton();

console.log(singletonInstance1 === singletonInstance2); // Output: true (Both instances are the same)

/************************ */
// ex2 in closure
const Singleton = (function () {
  let instance;

  function createInstance() {
    // Your singleton code goes here
    return {
      // Define methods and properties of your singleton
      someMethod: function () {
        console.log("Some method");
      },
      someProperty: "Some value",
      // ... other properties and methods
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Usage
const singletonInstance1 = Singleton.getInstance();
const singletonInstance2 = Singleton.getInstance();

console.log(singletonInstance1 === singletonInstance2); // Output: true (Both instances are the same)
