// iterable-challenge.js
const myObject = {
  counter: 0,
  arr: [11, 13, 14, 66, 67, 69, 234, 456, 2, 1],
  next: function () {
    if (this.counter > this.arr.length - 1) {
      return { value: undefined, done: true };
    }
    return { value: this.arr[this.counter++], done: false };
  },
};

const myObject2 = {
  [Symbol.iterator]: function () {
    return myObject;
  },
};

for (let x of myObject2) {
  console.log(x);
}
