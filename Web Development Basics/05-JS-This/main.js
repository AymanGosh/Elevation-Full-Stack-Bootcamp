const cat = {
  makeNoise: function () {
    console.log(this.noise);
  },
  noise: "Meow!",
};

const dog = {
  makeNoise: cat.makeNoise,
  noise: "Woof!",
};

cat.makeNoise();
dog.makeNoise();
//Meow!
//Woof!

// Here’s another way to write it with the same result:
const makeNoiseFunction = function () {
  console.log(this.noise);
};

const cat2 = {
  makeNoise: makeNoiseFunction,
  noise: "Meow!",
};

const dog2 = {
  makeNoise: makeNoiseFunction,
  noise: "Woof!",
};

cat2.makeNoise();
dog2.makeNoise();
