//! ARRAY


//* 1)non- primitive datatype 
// 2) used to store multiple values or data in one variable
// 3) can hold different types of data like int, float, string etc.
// 4) array length not fixed
//* 5) index position  starts from 0 and it is a integer value
// 6) its index data structure
//! datatype = object
// 7) array is in built object in javascript

//!----------------------------------------------------------------------
//*----------------------------------------------------------------------
//-----------------------------------------------------------------------


//! TYPES OF ARRAY

//*-----------------------------------------

//HOMOGENEOUS
//* array element with same datatype

const array = [10,20,30,40,50];
console.log(array)  //*(5) [10, 20, 30, 40, 50]

//*-------------------------------------------

//HETROGENEOUS
//* array with different datatypes


let arr12 = [10n, true, function(){console.log('function in array'); return 'Array' }, 100, 'javascript',[10,20],{name:"sachin"}, "end"];

console.log(arr12) //(8) [10n, true, ƒ, 100, 'javascript', Array(2), {…}, 'end']

//*------------------------------------------

//! for updating array

arr12[1] = 10  //* it will update the array at index 1 (position 2)
console.log(arr12)//(8) [10n, 10, ƒ, 100, 'javascript', Array(2), {…}, 'end']

//*-----------------------------------------

//! for adding new element in array
arr12[8] = 'i am new' //*it will add array at index 8 ( position 9)

console.log(arr12) //(9) [10n, 10, ƒ, 100, 'javascript', Array(2), {…}, 'end', 'i am new']

//*-----------------------------------------

//! deleting array element in array

delete arr12[3]  //deleting the array with index position 3 //* its not change length of the array instead of array element it will show empty

//!----------------------------------------------------------------------
//*----------------------------------------------------------------------
//-----------------------------------------------------------------------


//!TYPE OF OR METHODS  for creating array
//3 WAYS //*1)literal 2)constructor 3)array.of()

//!----------------------------------------------------------------------
//*----------------------------------------------------------------------
//-----------------------------------------------------------------------

//! LITERAL ARRAY

let ar = [
    10,20,30,()=>{console.log('arrow function')},3n
]
console.log(ar) //(5) [10, 20, 30, ƒ, 3n]

ar[3]() //O/P ==> arrow function //* to call function which is present in the array

//!----------------------------------------------------------------------
//*----------------------------------------------------------------------
//-----------------------------------------------------------------------


//! ARRAY CONSTRUCTOR
//BY INVOKING ARRAY CONSTRUCTOR
//IT WILL CREATE EMPTY ARRAY

//* IF WE PASS MULTIPLE ARGUMENT TO ARRAY THEN IT WILL ACT AS Element

let b = new Array(20,100);
console.log(b) //(2) [20, 100]0.

b[2] = 'javascript'
console.log(b.length) //3


//*----------------------------------------------------------------------
//-----------------------------------------------------------------------

//* IF WE PASS SINGLE ARGUMENT TO ARRAY AND ITS NUMBER THEN IT WILL ACT AS LENGTH  IF ITS STRING THEN IT WILL ACT AS Element
let d  = new Array(10)
console.log(d) //(10) [empty × 10]
console.log(d.length) //10
d.push(10)  //*return length of new array
console.log(d) //(11) [empty × 10, 10]
console.log(d.length)//11

//!----------------------------------------------------------------------
//*----------------------------------------------------------------------
//-----------------------------------------------------------------------

//! Array.of()

//*WE CAN PASS ARGUMENT THEN ITS ACT AS ELEMENT

let c = Array.of(10,20,300,100)
console.log(typeof c) //object
let n = 100;

let res1 = Array.isArray(c)  //IT IS RETURN BOOLEAN VALUE
console.log(res1) //true


//!----------------------------------------------------------------------
//*----------------------------------------------------------------------
//-----------------------------------------------------------------------

//! METHODS in array
//1_push()
//2_unshift()
//3_pop()
//4_shift()

//!----------------------------------------------------------------------
//*----------------------------------------------------------------------
//-----------------------------------------------------------------------

//!push()
//1)it is used to add one or more elements to the end of an array and returns the new length
//2)it will modify original array
//3)return type of push is number

const arr = [10,20,30,40]
let res2 = arr.push(10,50,80,60)
console.log(arr) //(8) [10, 20, 30, 40, 10, 50, 80, 60]
console.log(res2) //8

//!----------------------------------------------------------------------
//*----------------------------------------------------------------------
//-----------------------------------------------------------------------

//! unshift

//1)  it is used to add one or more elements to the beginning of an array and returns the new length
//2)it will modify original array
//3)return type of push is number


let skills = ['js', 'node', 'react', 'python']
let res3 = skills.unshift('java','spring','sdlc')
console.log(skills) //(7) ['java', 'spring', 'sdlc', 'js', 'node', 'react', 'python']

console.log(res3) //7


//!----------------------------------------------------------------------
//*----------------------------------------------------------------------
//-----------------------------------------------------------------------

