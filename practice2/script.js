let arr = [54,65,676,68,86,755,45,78]
let b;

console.log('main array')
console.log(arr)


Array.prototype.sumOfAll = function(){
    let sum = 0;
    for(let i = 0 ; i<this.length;i++){
        sum += this[i];
    }
    return sum
}
 

// console.log(arr.sumOfAll())
// console.log(Array.prototype)
// console.log('at(2')
// console.log(arr.at(2))

// console.log('concat')
// console.log(arr.concat(new Array(10,50,45)))

// // console.log('copywithin')
// // console.log(arr.copyWithin(1,2,5))

// console.log('every')
// console.log(arr.every((e,i,a)=>{
//     return e>5 
// }))
// console.log('some')
// console.log(arr.some((e,i,a)=>{
    //     return e>55 
    // }))
    
    console.log('some')
    let hey = arr.filter((element)=>{
        return element>155
        
})
    console.log('hey', hey)


console.log('main array')
console.log(arr)


console.log(
    `
    ALL ARRAY METHOD / non static method
    1).at(position) // return array element at position element
    2).concat(another array) // return new array 
    3).every(callbackfunction(element, index, array)=>{
        return condition [true/false on all element condition  ]
        })

    4).some(callbackfunction(element, index, array)=>{
        return condition [true/false on  on one element condition  ]
        })
    5).filter(callbackfunction(element, index, array)=>{
        to iterate array
        })
    6)

    `
)