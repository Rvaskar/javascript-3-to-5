const a = [20, 30, 40, 50, 60];

let r1 = a.find((a, b, ar) => {
  console.log(ar); //undefined //*(5) [20, 30, 40, 50, 60]
  return a > 100;
});

console.log(r1);
let ar = ["javascript", "java", "python", "sdlc"];

let r2 = ar.find((m, i, ar) => {
  return m === "java";
});
console.log(r2); //java

//! FindIndex()

let arr1 = [15, 20, 79, 56];

let c = (a, b, c) => {
  return a > 30;
};

let r3 = arr1.findIndex(c);
console.log(r3); //2

//! filter():

let arr123 = new Array(10,20,30,54,1,25,84,25)

let res123 = arr123.filter((m,i,arr123)=>{
    return m>20;
})
console.log(res123) //[30,54,84]

//! map()
let r11 = arr123.map((m,i,ar)=>{
    return m > 50;
})
console.log(r11) //(4) [false, false, false, false]

//! reduce():

let l = Array.of(20,50,70,10,9)
let r22 = l.reduce((acc,cv)=>{
    console.log(acc,cv)  //20 50 /70 70 //140 10 //150 9

    return acc + cv
},10)
console.log(r22) //159

let strArray = ["javascript", "python","java",  "sdlc"];

let str = strArray .reduce((acc,cv)=>{
  console.log(acc,cv)
  return acc < cv
})
console.log(str)