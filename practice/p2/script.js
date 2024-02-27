let a = [10,20,8,56,86,85,65,56]
console.log(a)

// a.push(12)
// console.log(a)


// a.unshift(10)
// console.log(a)

// a.pop()
// console.log(a)

// a.shift(20)
// console.log(a)


// let b = a.slice(1,3)
// console.log("here is slice operation with slice(1,3)", b)
// console.log("here is original array after the slice operation", a)

let c = a.splice(1,3)
console.log("here is splice operation with splice(1,3)", c)
console.log("here is original array after the slice operation", a)

// let b = a.find((a)=>{
//     return a>30
// })
// console.log(b)
// let b1 = a.findIndex((a)=>{
//     return a>30
// })
// console.log(b1)

// let d = a.filter((a)=>{
//     return a>12
// })
// console.log(d)
let d = a.map((a)=>{
    return a+45
})
console.log(d)
console.log(a)

let e = a.reduce((a,v)=>{
    return a+v
})
console.log(e)

let e1 = a.reduceRight((a,v)=>{
    return a+v
})
console.log(e1)

let b1 = a.some((a)=>{
    return a>10
})
console.log(b1)


let c1 = a.every((a)=>{
    return a>10
})

console.log(c1)

let s = 0
let d1 = a.forEach((a)=>{

    return s = s+a
})
console.log(s)

console.log(d1)

console.log(a.indexOf(56))

console.log(a.lastIndexOf(56))

console.log(a.includes(10))

let x = new Array(20,5,'hey')
console.log(a.concat(x))

console.log(a.fill('js',1,3))

/*
let a = [array element]
let b = new Array(number:length)
let b = new Array(string:element)
let c = Array.of(element)
1) pop()
2) push(add element at end)
3) shift()
4) unshift(add element at start)
5) slice( start index, last index)
6)splice(start index, delete element count, add n number of element)
7)find((element , index,array)=>{retrun first value where con saticefied})
8)findIndex((element , index,array)=>{retrun first index where con saticefied})
9)filter((element , index,array)=>{return all element con saticefied})
10)map((element , index,array)=>{return new array with action})
10)reduce((element , index,array)=>{return only one element})
11)reduceRight((element , index,array)=>{return only one element})
12)some((element , index,array)=>{boolean value})
13)every((element , index,array)=>{boolean value})
14)forEach((element , index,array)=>{undefined})
15)IndexOf(index of particular element)
16)lastIndexOf(last index of particular element)
17)includes(return boolean)
18)arrName.concat('arrays names'/ return new array)
19)flat(dept-1 / return 1D array)
20)sort((a,b)=>a-b)
21)reverse(array name)
22)fill(value to replace, start index, end index)

*/