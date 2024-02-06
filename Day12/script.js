//!Reduce right

let arRight = [1,5,4,9,7,3]
let resRight = arRight.reduceRight((acc,cv,index,array)=>{
    console.log("cv: ", cv)
    console.log("array",array)
  console.log("Acc: ", acc )
  console.log("Index: ", index )
    return acc+cv
})
console.log(resRight)


//! some()

//if any element satisfied condition it will return true otherwise false

var c  = [30,60,90,100,200]

let r2 = c.some((a)=>{
    console.log(a) 
    return a>300;
})
console.log(r2)  //false
let r12 = c.some((a)=>{
    console.log(a) 
    return a>3;
})
console.log(r12)  //true

//! every()
//if all the element satisfied condition it will return true otherwise false

let d = [50,3,80,58,68,25]
let r3 = d.every((a)=> a>2)
console.log(r3)  //true
let r13 = d.every((a)=> a>21)
console.log(r13)  //false


//! forEach()
//return type is void //*so it will show as undefined
let arr = new Array(150,40,500,80)

let r4 = arr.forEach(element => {
    return element + 5
});

console.log(arr)
console.log(r4)  //undefined


//! Indexof()

let array1 = ['string', 100, null, [20,50],10n,100,"str",10n]

let c11 = array1.indexOf(100,3)
console.log(c11)//5

console.log(array1.indexOf(10n,6)) //7

console.log(array1.indexOf(100000))  //-1

//! lastIndexof()

let b = new Array(50,"string",100n,[29,39],{name:"object"},50,100,"string",100n)
console.log(b) //(9) [50, 'string', 100n, Array(2), {…}, 50, 100, 'string', 100n]

console.log(b.lastIndexOf(50)) //5
console.log(b.lastIndexOf(100n))  //8

let newAr = new Set(...b)
console.log(newAr)