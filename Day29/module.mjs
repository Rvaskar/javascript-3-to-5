//! common js module


let sum = (a,b) => a + b;


let sub = (a, b) => {
    if (a>b) return a -b;
    return b -a
}


let arr = [ 10, 20,30]


// module.exports = {
//     sum,sub,arr,
// }

//! ES6 Module: 
//* Default export

//export default { sum, sub, arr};

//*Named export

export let sum1 = (a,b) => a + b;


export let sub1 = (a, b) => {
    if (a>b) return a -b;
    return b -a
}


export let arr1 = [ 10, 20,30]

