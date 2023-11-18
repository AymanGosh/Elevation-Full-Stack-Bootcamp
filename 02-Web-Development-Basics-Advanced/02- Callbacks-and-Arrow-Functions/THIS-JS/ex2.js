this.count = "global scope";
/************************************** */
let x = {
  count: 12,
  go: () => {
    setTimeout(() => {
      console.log(this.count);
    }, 1500);
  },
};
//x.go();
//global scope

//ex2.1
let x2 = {
  count: 12,
  go: function () {
    setTimeout(() => {
      console.log(this.count);
    }, 1500);
  },
};
//x2.go();
// 12

//ex2.2
let x3 = {
  count: 12,
  go: () => {
    setTimeout(function () {
      console.log(this.count);
    }, 1500);
  },
};
//x3.go();
//undefined

//ex2.3
let x4 = {
  count: 12,
  go: function () {
    setTimeout(function () {
      console.log(this.count);
    }, 1500);
  },
};
x4.go();
//undefined
