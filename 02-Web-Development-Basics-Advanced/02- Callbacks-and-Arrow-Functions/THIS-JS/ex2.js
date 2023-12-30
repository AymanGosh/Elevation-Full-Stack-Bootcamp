this.count = "Hello from global scope";
/************************************** */
let x = {
  count: 12,
  go: () => {
    setTimeout(() => {
      console.log(this.count);
    }, 1500);
  },
}; //Hello from global scope
//x.go();

//ex2.1
let x2 = {
  count: 12,
  go: function () {
    setTimeout(() => {
      console.log(this.count);
    }, 1500);
  },
}; // 12
//x2.go();

//ex2.2
let x3 = {
  count: 12,
  go: () => {
    setTimeout(function () {
      console.log(this.count);
    }, 1500);
  },
}; //undefined
//x3.go();

//ex2.3
let x4 = {
  count: 12,
  go: function () {
    setTimeout(function () {
      console.log(this.count);
    }, 1500);
  },
}; //undefined
x4.go();
