// let a = [10,20,30,40,50,85,36,50,60,6,6,95,80,30,60]

// let b = new Array(10)
// let b1 = new Array()
// console.log(b)
// console.log(b1)

// let c = new Array(10,20)
// console.log(c)

// let d = new Array('a')
// console.log(d)

// let e = Array.of()
// console.log(e)

// let f = Array.of(10)
// console.log(f)

// console.log(a[2])

// let x = {
    //     name: 'hey'
// }




// console.log(a)

// console.log(a.push(550))
// console.log(a.unshift('a'))
// console.log(a.pop())
// console.log(a.shift())

// console.log(a.slice(2))
// console.log(a.splice(1,5,12,54,54,78,25,65))

// for(i in a){
//     console.log('index position : ',i)
// }


// for(let i = 0; i<4; i++){
//     console.log(a[i])
// }

// let b = a.find((a)=>{
//     // if(a = 20)
//     return a < 1.20

// })



// let a1  = Array.of(10,60,'hey','hi','hello')
// let b = a.indexOf(30)
// console.log(b)
// let d = a1.concat(a)
// console.log(d)


// let c2 = a.fill('h',1,4)


// console.log('pass the condition in return statement')

// console.log(a)


const helo = async( )=>{
    let data =await fetch("https://www.shoppersstack.com/shopping/products/alpha")
    console.log(data)
    let d = await data.json();
    console.log(d)
    
}
helo()