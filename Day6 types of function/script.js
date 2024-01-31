//! "use strict"   
//to follow strict syntax
//* TYPES OF FUNCTION

//! 1) ANANYMOUS FUNCTION
// function(){
//     //!ananymous function
// }

//! 2) NAMED FUNCTION
function f1() {
  console.log("named function");
}

//! 3) function with Expression

let x = function () {
  return "function with expression";
};

let r = x();
console.log(r);

//! 4)  Arrow function

let ar = () => {
  console.log("Arrow function");
  return 20;
};

ar();

// 1) in arrow function if we have only one line of code and its //* return statement we can write like this
let arr = (c) => c;

console.log(arr("20")); //*here we use console because we directly getting return statement

// 2) in arrow function if we have only one parameter then () is not needed we able to directly pass the parameter
let arr1 = (c) => console.log(c);
arr1(100);

//!HOF ==> higher order function
//the function which is takes another function as an argument is known as HOF

//! callback function
//* the function which passing as argument to another  function is known  as callback function

let a = () => {
  console.log("callback function");
};

function demo(ar, a, b, c) {
  console.log(a, b, c);
  console.log("higher order function");
  ar(); //we are calling a function here because are going to pass as an argument
}
demo(
  a,
  function () {
    console.log("hey ananymous function")
    return "ananymous";
  },
  20,
  40 
);
//! code is run based on which statement order in function
//* output of above code
//1) ƒ () {
//     return "ananymous";
//   } 20 40
// 2) higher order function
// 3) callback function

//!WINDOW OBJECT


console.log(window)

window.alert("alert method")

this.alert("hey")

console.log(this === window)  //true

a = 100;
console.log(a);

function f2(a,b,b){
    console.log(a + b)
}
f2(10,20,40)  //40



