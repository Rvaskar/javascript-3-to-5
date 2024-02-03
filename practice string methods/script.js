let a = 'string with operation'
console.log(a.match('with')) //['with', index: 7, input: 'string with operation', groups: undefined]
let p = a.lastIndexOf('g') //last index of use to find specific str/character in string
console.log(p)
let b = a.substring(2,5) //same as array splice
console.log(b) //rin
console.log(a.length) //6
console.log(a.replace('i','mon')) //strmonng
console.log(a.split('w',2)) //(2) ['string ', 'ith operation']
console.log(a.split('i',2)) //(2) ['str', 'ng w']
console.log(a.split('i',3)) //(3) ['str', 'ng w', 'th operat']
console.log(a.split("")) //(21) ['s', 't', 'r', 'i', 'n', 'g', ' ', 'w', 'i', 't', 'h', ' ', 'o', 'p', 'e', 'r', 'a', 't', 'i', 'o', 'n']

let nam = 'rajesh'
let namArray = nam.split('')
console.log(namArray) //(6) ['r', 'a', 'j', 'e', 's', 'h']
let namA = namArray.reverse()
console.log(namA) //(6) ['h', 's', 'e', 'j', 'a', 'r']


let namAr = namArray.toReversed()
console.log(namAr)//(6) ['h', 's', 'e', 'j', 'a', 'r']

//! .JOIN()
console.log(namA.join('')) //hsejar
console.log(namA.join('_')) //h_s_e_j_a_r

//! CONCAT()
//* use to join to word

let str = 'hey'
console.log(str.concat(" world")) //*hey world
console.log(namA.concat("")) //(7) ['h', 's', 'e', 'j', 'a', 'r', '']







console.log(nam.toUpperCase()) //RAJESH
console.log(typeof nam.toUpperCase()) //*string

console.log(nam) //rajesh

console.log(nam.toLowerCase()) //rajesh
console.log(typeof nam.toLowerCase()) //*string
console.log(nam) //rajesh

console.log(nam.toLocaleUpperCase()) //RAJESH
console.log(typeof nam.toLocaleUpperCase()) //*string
console.log(nam) //rajesh

console.log(nam.toLocaleLowerCase()) //rajesh
console.log( typeof nam.toLocaleLowerCase()) //*string
console.log(nam) //rajesh


let string = "i am string"
console.log(string.charAt(2)) //a  //*showing character present at 2 nd index