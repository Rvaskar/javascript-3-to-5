// var c = 100;
// function hey(a , b ){

//     console.log('heloo')
//     a = 10
//     b = 50
//     console.log(a + b)
//     return function(){ 
//         return function(){ 
//             let d = window.c
//             return 10+20+d+a+b
//         }
//     }
// }
// // hey()
// let b = hey()
// console.log(b()())

//! arrow function
// let b = a => a

// console.log(b(20))
// let b = 2

// function outer(){
//     console.log('outer')
//     let b = 20

//     function inner1(){
//         console.log('inner')
//         console.log(b)
//         // let b = 20;
//     }
//     inner1()

// }
// // outer()


// //! iife

// (function (){
//     console.log("hey i am in iife")

// }
// )()


let array = [10,2,58,45,21,2,52,1]
let v = new Set(array)
let array1 = [...v]
console.log(v)
console.log(array1.sort((a,b)=>a-b));
