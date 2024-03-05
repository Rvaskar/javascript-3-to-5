//! common js module

let res = require ("./module.mjs")

let {sub , sum, arr} = res;

console.log(sum(100, 2000))
console.log(sub(100,500))


//! ES6 module


//*  Default export

import s from "./module.mjs"
console.log(s)


//* Named export:

import { sub1 as sub,  sum1, arr1} from "./module.mjs"

console.log(sub(10,50))
console.log(arr1)
console.log(sum1(606,50))