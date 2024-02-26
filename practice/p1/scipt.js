let b = [1,10,2,32,56,4,87,8,69,64,54,78,8,45,81,15]

// let c = b.findIndex((a)=>{ if( a == 8) return a})

function appereance(arr,b,c){
  let d = []
  for(let i = 0; i<arr.length; i++){
    if(arr[i]==b){
      d.push(i)
    }
  }

  return d[c-1]
}
// console.log(c)
 console.log(b)



let x = appereance(b,8,2)
console.log(x)