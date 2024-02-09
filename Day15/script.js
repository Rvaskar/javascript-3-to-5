//! Spit()

// spilt is used to split the string and store in to the into string we pass one argument on basis of that argument it will create a new array
//NOn static method
//not modify original string

var s = "javascript";

let r = s.split("");

console.log(r); //(10) ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
console.log(s); //javascript

let j = "hello world";
console.log(j.split(""));
//* (11) ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

//!join()

let ar = ["j", "a", "v", "a"];
console.log(ar.join("")); //*java

let v = "welcome";

let convertToAr = v.split("");

let reverse = convertToAr.reverse();
let revStr = reverse.join("");
console.log(revStr); //*emoclew

let res = v.split("").reverse().join("");
console.log(res);  //*emoclew

let c = v.split("").reduceRight((acc, cv) => acc + cv, "");

console.log(c);

let r1 = s.concat(v, j); //*emoclew

//! INCLUDES()
//return boolean values on the basis of the  search element is present in a string or not
let str = "this is javascript class";

console.log(str.includes("java"));
console.log(str.includes("sF"));

let s1 = "javascript";

let res1 = s1.indexOf("a", 2);
console.log(res1);

let res2 = s1.lastIndexOf("s");
console.log(res2);

let n = 100;

let convertToStr = n.toString();
console.log(typeof convertToStr);

let cd = [1, 2000, 30, 40, 20];

// let key = c.keys()

// for ( let i of key){
//     console.log(i)
// }
// let values = c.values()

// for ( let i of values){
//     console.log(i)
// }
// let key1 = c.entries()

// for ( let i of key1){
//     console.log(i)
// }

let n1 = 100;
let x1 = 100;

console.log(n1 === x1);

let ar1 = [10, 20];
let br2 = [20, 30];

console.log(ar1 === br2);

const arr1 = [10, 20, 30];
// arr[2] = 300
// console.log(arr)

// alert("")
