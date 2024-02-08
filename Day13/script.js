//! CONCAT()
let y = [20,30]
let z = [40,68]
let x = [180,90]

let r1 = y.concat(x,z)
console.log(r1) //(6) [20, 30, 180, 90, 40, 68]
console.log(y) //(2) [20, 30]

//! INCLUDES()

let arr = [10n,100,true,()=>{return 100}, [20,40],'str']

console.log(arr.includes("str")) // true
console.log(arr.includes(10n)) //true

console.log(arr.includes(()=>{
    return 100;
})
);//false

//! FILL()

let ar= [10,20,30,40,50]

ar.fill('js')
console.log(ar) //['js', 'js', 'js', 'js','js']

//! FLAT()

let c = [10,20,[10,80,65,[25,65,85],5],45,54]

console.log(c) //(5) [10, 20, Array(5), 45, 54]

let r2 = c.flat(2)
console.log(r2) //(11) [10, 20, 10, 80, 65, 25, 65, 85, 5, 45, 54]


let array = ['java','js','node','SDLC']
array.sort()
console.log(array) //(4) ['SDLC', 'java', 'js', 'node']

let num = [100,10,20,30,250,1100]

num.sort((a,b)=>b-a)
console.log(num) //(6) [1100, 250, 100, 30, 20, 10]