//! IIFE => IMMEDIEATE INVOKE FUNCTION EXPRESSION

(function (a){
    console.log('IIFE')
    console.log(a)
})(10)  //calling function after declaration

console.log(parseInt(true))  //NaN

console.log(Number('100'))  //100
console.log(Number(""))  //0
console.log(Number(undefined)) //NaN
console.log(Number(null)) //0

let y = '100.25'
console.log(parseInt(y)) //100
console.log(parseFloat(y)) //100.25

console.log(20 / 6) //3.33333333335

console.log(a) //undefined

// console.log(b)

var a = 100
let b = 200
const c = 300

console.log(a,b,c) //100,200,300

demo() //demo function , end

function demo(){
    console.log("demo function")
    console.log("end")
}

console.log(parseInt('10a')) //10
console.log(parseInt('z10')) //NaN


//! ARRAY

const ar = [10,20,30,40,50];
console.log(ar)  //*(5) [10, 20, 30, 40, 50]

let arr = [10n, true, function(){console.log('function in array'); return 'Array' }, 100, 'javascript',[10,20],{name:"sachin"}, "end"];

console.log(arr) //(8) [10n, true, ƒ, 100, 'javascript', Array(2), {…}, 'end']

//! for update
arr[1] = 10

console.log(arr)//(8) [10n, 10, ƒ, 100, 'javascript', Array(2), {…}, 'end']

//! for add
arr[8] = 'i am new' 

console.log(arr)

//! deleting array

delete arr[3]