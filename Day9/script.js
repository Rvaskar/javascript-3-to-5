//! methods for creating array
let ar = [
    10,20,30,()=>{console.log('arrow function')},3n
]
arr[3]()  //* to call function which is present in the array

//! array constructor

let b = new Array(20,100);
console.log(b)
b[2] = 'javascript'
console.log(b.length) //2

//! Array.of()

let c = Array.of(10,20,300,100)
console.log(typeof c)
let n = 100;

let res1 = Array.isArray(c)
console.log(res1)

//! METHODS

//!push()

const arr = [10,20,30,40]
let res2 = arr.push(10,50,80,60)
console.log(arr)
console.log(res2)

//! unshift

let skills = ['js', 'node', 'react', 'python']
let res3 = skills.unshift('java','spring','sdlc')
console.log(skills)

console.log(res3)