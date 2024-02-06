//!Reduce right
//reduceRight() is same as reduce but it start  from the end of array.

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

//its all a hof
//it will take another function as argument (callback function) //*that callback function will take three parameter
//if any element satisfied condition it will return true otherwise false
//it will return boolean value
// some() method iterate not iterate all the element  in an array .It returns true if at least one element satisfies.

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
//every() method iterate  each elements and check whether all elements satisfy the given condition or not. If yes then it returns true
//its all a hof
//it will take another function as argument (callback function) //*that callback function will take three parameter
//if all the element satisfied condition it will return true otherwise false
//it will  also return boolean value


let d = [50,3,80,58,68,25]
let r3 = d.every((a)=> a>2)
console.log(r3)  //true 
let r13 = d.every((a)=> a>21)
console.log(r13)  //false


//! forEach()
//forEach() use  to perform action on each elements of array without returning anything 
//its all a hof
//it will take another function as argument (callback function) //*that callback function will take three parameter
//return type is void //*so it will show as undefined
let arr = new Array(150,40,500,80)

let r4 = arr.forEach(element => {
    return element + 5
});
// arr.forEach(function callbackfn(val, idx, arr) {
//    //obj[idx]+=5;
//     console.log(`${val} ${idx}`)
// });

console.log(arr)
console.log(r4)  //undefined


//! Indexof()
//indexof() used  to find index of first occurance of element in array
//it will take 2 argument 
//first one is required parameter which we want to search in array
//second one is optional parameter from where we start our search if not provided then it will consider 0 as default starting point

let array1 = ['string', 100, null, [20,50],10n,100,"str",10n]

let c11 = array1.indexOf(100,3)
console.log(c11)//5

console.log(array1.indexOf(10n,6)) //7

console.log(array1.indexOf(100000))  //-1

//! lastIndexof()

//indexof() used  to find index of last occurance of element in array
//it will take 2 argument
//first one is required parameter which we want to search in array
//second one is optional parameter from where we start our search if not provided then it will consider 0 as default starting point

let b = new Array(50,"string",100n,[29,39],{name:"object"},50,100,"string",100n)
console.log(b) //(9) [50, 'string', 100n, Array(2), {…}, 50, 100, 'string', 100n]

console.log(b.lastIndexOf(50)) //5
console.log(b.lastIndexOf(100n))  //8

let newAr = new Set(...b)
console.log(newAr)