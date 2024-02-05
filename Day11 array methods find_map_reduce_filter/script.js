//! find()
//1)array.find() is used  to search for a specified value within an array and return the first occurrence that matches the search value.
//2)It's Hof function and it will takes 1 argument which is callback function
//3) call back function will takes 3 argument element, index, array
//4) not modify original array
//5) if condition is not satisfied it will return undefined


const a = [20, 30, 40, 50, 60];

let r1 = a.find((a, b, ar) => {
  console.log(ar); //undefined //*(5) [20, 30, 40, 50, 60]
  return a > 100;
});

console.log(r1);
let ar = ["javascript", "java", "python", "sdlc"];

let r2 = ar.find((m, i, ar) => {
  return m === "java";
});
console.log(r2); //java

//! FindIndex()
//1)array.find() is used  to search for a specified value within an array and return the first occurrence INDEX that matches the search value.
//2)It's Hof function and it will takes 1 argument which is callback function
//3) call back function will takes 3 argument element, index, array
//4) not modify original array
//5) if condition is not satisfied it will return undefined

let arr1 = [15, 20, 79, 56];

let c = (a, b, c) => {
  return a > 30;
};

let r3 = arr1.findIndex(c);
console.log(r3); //2

//! filter():

//1)it will return  new array with the elements that satisfy the condition given in callback function.
//2)HOF will takes one argument as callback function
//3) callback function takes  three arguments: element , index and array.
//4)callback  function returns true if element satisfies the condition otherwise false.
//5)Not modify original array

let arr123 = [10,20,30,54,1,25,84,25]

let res123 = arr123.filter((m,i,arr123)=>{
    return m>20;
})
console.log(res123) //(5) [30, 54, 25, 84, 25]

//! map()
//1) Array.map() perform operation on the array while iterating array element  by element and returns new array with modified elements.
//2)it's Higher order function ==> //* it will takes another function argument
//3) HOF takes only one argument(callback function) //*callback function takes 3 argument 
let r11 = arr123.map((element,index,ar)=>{
    return element + 50;
})
console.log(r11) //(8) [60, 70, 80, 104, 51, 75, 134, 75]

//! reduce():
//1)array.reduce()  method is used to reduce the array to single value  
//2) callback function have four arguments:accumulator , currentValue , index and array . //*mostly we pass two values : acc and cv
let numbers = [1, 2, 3, 4, 5];

//*syntax and example
let sum = numbers.reduce(function(accumulator, currentValue, currentIndex, array) {
    console.log('Accumulator:', accumulator);
    console.log('Current value:', currentValue);
    console.log('Current index:', currentIndex); 
    console.log('Array:', array);  //Array: (5) [1, 2, 3, 4, 5]

    return accumulator + currentValue;
}, 0);

console.log('Sum:', sum);  //Sum: 15

let l = Array.of(20,50,70,10,9)
let r22 = l.reduce((acc,cv)=>{
    console.log(acc,cv)  //20 50 /70 70 //140 10 //150 9

    return acc + cv
},10)
console.log(r22) //159

let strArray = ["javascript", "python","java",  "sdlc"];

let str = strArray .reduce((acc,cv)=>{
  console.log(acc,cv)
  return acc < cv
})
console.log(str)