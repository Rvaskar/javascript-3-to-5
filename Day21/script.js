
// function findSecond(arr,a){
//      let ar= []

//     for(let i= 0; i<arr.length; i++){
//         if(a == arr[i]){
//             ar.push(i)
//         }
//     }
//     return ar;
// }


// let b = [10,2,2,15,2,554,2,45,4]
// let v = 3
// console.log(findSecond(b,2)[v-1])

// let count = 0
// let b = setInterval(() => {
//     count++;
//     console.log("count is",count)
//     if(count == 5){
//         clearInterval(b)
//     }else{
//         console.log("in loop")
//     }
// }, 2000);

// setTimeout(() => {
//     console.log(count)
// }, 5000);

// let s1 = setTimeout((a,b)=>{
//     console.log("SetTimeout 1")
// },3000)

// console.log(s1)


// let s2 = setInterval(() => {
//     console.log("setInterval")
// }, 1000);
// console.log(s2)

// let x = setTimeout(() => {
//     console.log('SetTimeout 22')
// }, 4000);
// console.log(x)

// let s3 = setInterval(() => {
//     document.write('hello' + '</br>')
// }, 2000);

// setTimeout(() => {
//     clearInterval(s3)
// }, 10000);


let str = "javascript"
console.log([...str])
console.log([... new Set([...str])])