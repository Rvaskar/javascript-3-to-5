let ar = ['java','node','react','express']
ar.sort()

ar.reverse()
console.log(ar) //(4) ['react', 'node', 'java', 'express']
//! SORT()
let a = [110,20,30,225,10,9]
a.sort((a,b)=> a-b)
console.log(a) //(6) [9, 10, 20, 30, 110, 225]
a.sort((a,b)=> b-a)
console.log(a) //(6) [225, 110, 30, 20, 10, 9]


//!STRING METHODS

let str = 'Javascript'
console.log([...str])

for (let v of str){
    console.log(v)
}

for (let v in str){
    console.log(v)
}

console.log(str.charAt(3) ) //a

for(let j = 0; j<str.length; j++){
    let r = str.charAt(j)
    console.log(r)
}


let c = 'hello world'

console.log(c.length) //11
//! SLICE()

console.log(c.slice(2,6)) //llo

console.log(c.slice(-5,-2)) //wor

console.log(c)

let b = "express node"

//! Substring()

console.log(b.substring(0,5)) //expre
console.log(b) //express node

//! SUBSTR()
console.log(b.substr(2,5)) //press  //*deprecated now


let str2 = "this is javascript class and you can learn javascript"


let r1 =  str2.replace("javascript","python")
console.log(r1)

console.log(str2)
let r3 = str.replace("hello"," world")
console.log(r3)

let r2 = str.replaceAll("javascript","python")
console.log(r2)

let newStr = "JAVASCRIPT"
console.log(newStr.toLowerCase())
console.log(newStr.toUpperCase())

let n = '100235 12'
console.log(n.charCodeAt(4)); //return ASCII value of character at that position //*49

console.log(n.charCodeAt(6)) //32


let q = "        hello  world   "

console.log(q.length); // return the number of characters in a string (including spaces and tabs)
let r4 = q.trim()

console.log(r4.length) // return the number of characters in a string after removing leading and trailing white spaces //*12
