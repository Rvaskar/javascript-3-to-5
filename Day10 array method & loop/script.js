//! POP()
//1) removes last element from the array
// 2) return deleted array
//3) return type is depends on the element which is deleted
//4) it dose not take any argument
//5) we can able to delete only one element at a time
//6) for deleting multiple array we have to write multiple time pop() method
//7) if array is empty then it will return undefined
//8) modify original array

let ar = Array.of(20, 30, 40, 10, 89, 68);
console.log(ar); //(6) [20, 30, 40, 10, 89, 68]

ar.pop();
console.log(ar); //(5) [20, 30, 40, 10, 89]
ar.pop();
console.log(ar); //(4) [20, 30, 40, 10]
let a = ar.pop();
console.log(ar); //(3) [20, 30, 40]

console.log(a); //10

//! SHIFT()

//1) removes first element from the array
// 2) return deleted array
//3) return type is depends on the element which is deleted
//4) it dose not take any argument
//5) we can able to delete only one element at a time
//6) for deleting multiple array we have to write multiple time shift() method
//7) if array is empty then it will return undefined
//8) modify original array

let arr = new Array("js", "node", "react", "express");
let b = arr.shift();

console.log(b); //*js

console.log(arr); //(3) ['node', 'react', 'express']

//!slice
//1)use to  extract part of the array
// 2) return new array
//3) return type is object
//4) non-static  method //*so we have to called with reference name(array name)
//5) it will not effect or modify original array
//6) slice() method takes two argument (starting index, last index)  //*if we pass only one  argument then it print rest element
//7) we can pass negative index also //* so it will start from last element which start  counting from -1
//8) consider array counting
//* in positive => 0  1   2    3    4   5
//! let array = [10, 20, 30, true, 4n, 50n]
//*in negative=  -6  -5  -4  -3   -2   -1

let a1 = [22, 44, 68.9, 96, 100];

console.log(a1.slice(2)); //(3) [68.9, 96, 100] //*if we pass only one  argument then it print rest element

console.log(a1); //(5) [22, 44, 68.9, 96, 100]

//we can pass negative index also //* so it will start from last element which start  counting from -1
console.log(a1.slice(-4)); //(4) [44, 68.9, 96, 100]
console.log(a1.slice(-5, -3)); //(2) [22, 44]

//!SPLICE()
//1) to modify(add,delete,change) array element with particular index(position)
//2) non-static  method //*so we have to called with reference name(array name)
//3) it will change/modify the actual array
//4) it will return deleted element in form of array
//5) return type is object //*because it return in form of array
//6) if we don't want to delete element then we pass 0 for deleting position
//7)it will take 3 or multiple element
// syntax  //!  arrayName.splice(index, how many item you want to remove ,item1,item2...)

let y = [
  "str",
  10n,
  true,
  () => {
    return 100;
  },
  100,
  [10, 20],
  { name: "sachin" },
];

let res = y.splice(3, 1, "java");
console.log(res); //[ƒ]  //*0:()=>{return 100}

console.log(y); //(7) ['str', 10n, true, 'java', 100, Array(2), {…}]

let z = [
  "str",
  10n,
  true,
  () => {
    return 100;
  },
  100,
  [10, 20],
  { name: "sachin" },
];
// z.splice(5,0,10,20,30,40)

let y1 = z.splice(5, 0, 10, 20, 30, 40);
console.log(y1); //[]
console.log(z); //(7) ['str', 10n, true, ƒ, 100, Array(2), {…}]

let array = [20, 30, 40, 50];

let l = array.length;

for (let i = 0; i < l; i++) {
  console.log(array[i]); //20,30,40,50
}

let i = 0;
while (i < 1) {
  console.log(array[i]); //20
  i++;
}

for (e of array) {  //20,30,40,50
  console.log(e);
}

for (i in array) {
  console.log(i); //0 1 2 3
}

let arrayA = [10,20,true,'string']
for (let index = 0; index < arrayA.length; index++) {
    const element = arrayA[index];
    console.log(element )               //10,20,true,string
    console.log(element * 2)            //20,40,2,NaN
    console.log(typeof element)         //number number boolean string
    console.log(element)

}