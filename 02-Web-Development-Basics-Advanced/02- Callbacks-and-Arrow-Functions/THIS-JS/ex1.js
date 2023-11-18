this.name = "global";
/*********************************** */
const suspenseBuilder = {
  name: "El Mysterio",
  displayName: function () {
    console.log("You are going to see the name in 3 seconds...");
    this.name = "local scope of method ";
    setTimeout(function () {
      //normal function
      console.log("The name is: " + this.name);
    }, 3000);
  },
};
//suspenseBuilder.displayName();

/*
You are going to see the name in 3 seconds...
The name is: undefined
*/
/**
 * The suspenseBuilder object has two keys: a name string and a displayName method.
The displayName method has a console log, then sets a timeout to wait 3 seconds 
before console logging this.name - wild suspense here.
However… With regular functions, 
this is the object that called the function - but who called that callback function in setTimeout? 
No one called it o_o
Therefore, since “no one” called the function, this will just be the general window object, 
and this.name will be undefined.
 */

//ex2
const suspenseBuilder2 = {
  name: "El Mysterio",
  displayName: function () {
    console.log("You are going to see the name in 3 seconds...");
    this.name = "local scope of method ";
    setTimeout(() => {
      //this is the change
      console.log("The name is: " + this.name);
    }, 3000);
  },
};

//suspenseBuilder2.displayName();

//You are going to see the name in 3 seconds...
//The name is: local scope of method

/*

This works because in arrow functions, 
"this" is determined by lexical scope. 
That just means that it doesn’t matter who called the function, 
but rather where it was called - the context of the function.

In this case, the callback function was called inside suspenseBuilder,
 and as such "this" will equal suspenseBuilder!

Another way to think of lexical scope is simply as the "regular scope". 
Remember that inner-functions (like the callback) will always have access to the scope of outer functions 
( like displayName ). Therefore, whatever "this" is inside of displayName will apply to the callback as well.



*/
