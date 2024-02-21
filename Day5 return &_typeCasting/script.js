//! NON - PRIMITIVE

//*FUNCTION

//! return statement
//when use return statement:  if we want to access any value outside of the function then we pass it into return statement

// we can pass only one value in the return statement and //* type of the return statement is what is the type of the datatype which are we passing in return statement

//if we not write return value to function then it have by default the return value it hold undefine 
//* if we want to call/get return value : for that we have to store it one variable

function demo() {
  let a = 100;
  console.log(a);
  console.log("hello")
  return "javascript";
}
let r = demo();
console.log(r); //javascript //*here we getting return value

function demo1() {
  console.log("hello");
  return 20;
}
let r1 = demo1(); //* if we not write the return then it will be default write
console.log(r1); //?hello undefined

function f1() {
  return 10, 20, 30, 40;  //?  interpreted left to right
  //* if we pass more than 1 value to the return the it will consider last value because js is interpreted so it will goes left to right
}
let p = f1();
console.log(p); //?40

let d = "hey";
let z = parseInt(d);
console.log(z);

//! TYPECASTING
//Converting one data type into another data type is Known as type casting

//* Implicit type casting && type coerion
//Converting one data type into another data type is Known as type casting internally-(automatically)

console.log(10 + "10"); //? number to string  //*1010
console.log(1000 - "200"); //? string to number //* 800
console.log(50 * "5"); //?string to number //250

//! Explicity TYPECASTING
//Converting one data type into another data type is Known as type casting manually
let y = "500";
console.log(parseInt(y)); //?500 with number datatype
let b = 300;
console.log(String(b)); //? 300 with string data type
console.log(Boolean(NaN)); //?false
console.log(Boolean("str")); //? true

//! isNan first convert value into number then check for NaN
console.log(isNaN(true)); // false   //*here it check for for the Number(true) //1  so one value pass to the isNaN instead of true  same below
console.log(isNaN("100")); //false  //*here it check for for the Number("100") //100  so one value pass to the isNaN instead of "100"
console.log(isNaN("str")); // true //*here it check for for the Number(true) //NaN  so one value pass to the isNaN instead of 'str'

//!NUmber.isNaN directly check for the datatype
console.log(Number.isNaN('str')) //? false


// window.alert("hey")
// alert("hry")
console.log(this === window)