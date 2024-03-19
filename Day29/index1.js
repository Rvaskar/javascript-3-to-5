// let gp = document.getElementById("gp")
// let p = document.getElementById('p')
// let c = document.getElementById('c')
// let t = document.getElementById('message')
// console.log(t)


// gp.addEventListener('mouseover',()=>{
//     console.log('hello')
//     gp.style.background = 'red'
// })

// t.addEventListener('keypress',(e)=>{
//     if(e.key=='j'){alert('hey')}
//     console.log('hey')
//     console.log(e)
// })


let arr = [10,50,8,5,35,68,98,5,632,2,56,5,68,12]

function repeat(arr,value){
    let b = arr.indexOf(value)
    let b1 = arr.indexOf(value,b+1)
    let b2 = arr.indexOf(value,b1+1)

    return b2

}

console.log(repeat(arr,5))

// function countChar(str){
//     const obj = {}

//     for(let char of str){
//         if(char !== " "){
//             obj[char]=obj.char + 1||1
//         }
//     }
//     return obj
// }
// console.log(countChar("hell fdg o"))

let arr1 = [10,5,25,65,3,52,5,12,5,64,56,22,57];
// console.log(d(arr,5));
// // console.log(arr.indexOf(5))

function another(arr , ele){
    
    let count = []
    for(let i = 0; i< arr.length; i++){
        if(ele == arr[i]){
            console.log(i)

            count.push(i)

        }
    }
    return count

}
// let dv = another(arr,5)
// console.log('here is second index',dv[1])
console.log('here is second index', another(arr,5)[2])


let array4 = [10,20,10,5,96,10,24,12]
function occurredOfEle(b){
    let obs = {}
    console.log(obs)
    b.forEach(element => {
        obs[element] = obs[element] + 1 || 1
    });
    return obs
}

console.log(occurredOfEle(array4))