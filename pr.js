
// function countChar(str){
//     const obj = {}

//     for(let char of str){
//         if(char !== ""){
//             obj[char]=obj[char] +
//             1||1
//         }
//     }
//     return obj
// }
// console.log(countChar("hello"))


// function d(arr, val){
//     let first = arr.indexOf(val)
//     let second = arr.indexOf(val, first + 1)
//     let third = arr.indexOf(val, second + 1)

//     return third

// }

// let arr = [10,5,25,65,3,52,5,12,5,64,56,22,57];
// // console.log(d(arr,5));
// // // console.log(arr.indexOf(5))

// function another(arr , ele){
    
//     let count = []
//     for(let i = 0; i< arr.length; i++){
//         if(ele == arr[i]){
//             console.log(i)

//             count.push(i)

//         }
//     }
//     return count

// }
// // let dv = another(arr,5)
// // console.log('here is second index',dv[1])
// console.log('here is second index', another(arr,5)[1])



console.log(Math.round(Math.cbrt(Math.round(Math.sqrt(Math.floor(Math.random(200) * (900-500) + 500 ))))))