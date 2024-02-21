//spread operator

let v = [20,30,210,41]

let [x,y,z] = v
console.log(v[1])
console.log(b)

let d = [40,50,60,70,80,90]
let [ab,bc,...ad]=d;

console.log(ab)
console.log(ac)
console.log(ad)

//!rest Parameter
function demo(a,b,...c){
    console.log(a,b)
    console.log(c)

}
demo(20,30,4,50,60)

let str = 'javascript'

//! Spread operator

console.log(str)
console.log(...str)

let arr = [10,20,30,40,50,60,70]
console.log(arr)
console.log(...arr)

let y1 = [10,20]
let z1 = [20,40]

console.log([...y1,...z1])



