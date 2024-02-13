//! -------------------------------------
/*
Please complete this programs before attending next lecture.

1. Write a program to return prime numbers in an array .

2. Write a program to return armstrong numbers in an array.

3. Write a program to find fibanocci series of a number.

4. Write a program to return 3rd biggest and 3rd smallest element in an array.

5. Write a program to sort the number array without using sort method.

6. Write a program check the given string is PALINDROME or not?

7. Write a program to find the sum of numbers in an ALPHA NUMERIC STRING?

8. Write a Program for number of characters in each WORD and count them?

9. Write a program to REVERSE THE WORDS in a SENTENCE?

10. Write a program to convert BINARY to DECIMAL?
*/

//! ---------------------------------------------
//*write a programme to find prime number in array
// let arr = [10,5,86,55,9,7,3,2,54]

// let newArr = []
// let b = arr.map((a)=>{
//     for (i = 2; i < a; i++)
//      if(a > 2 && a % i == 0){
//         return  null
//     }
//     else{

//         return a
//      }
// })
// console.log(b.filter(function (el) { return el != null}))
function isPrime(n) {
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) count++;
  }
  if (count === 0) return true;
  else return false;
}

let ar = [7,20,22,11,2,23,65,9,37,54]
let res = ar.filter( v => isPrime(v))

console.log(res)


//* find armstrong numbers in array

function isArmstrong(n){
    let temp = n;
    let count = n.toString().length;
    let sum = 0;
    while(n > 0){
        let d = n % 10;
        sum = sum + d ** count;
        n = parseInt(n / 10)
    }
    return temp === sum;
}

let arr = [9,370,253,467,68,153,371,407];

let r2 = arr.filter((v)=> isArmstrong(v))
console.log(r2)


function isPalindrome(s){
    let temp = s.toLocaleLowerCase()
    console.log(temp)
    let b = s.toLocaleLowerCase().split().reverse().join()
    console.log(b)
    return temp === b
}
console.log('hey')
let b = isPalindrome("heleh")
console.log(b)
//*8

// let s = "fdf4sf45fd7f"
// let ar1 =[]
// for(let i=0; i<s.length; i++){
//     let b = s.charAt(i)
//     if(typeof (parseInt(b))==="number"){
//      ar1.push(b)
//     }

// }
// console.log(ar1)

console.log("question 7---------------------")
//*Write a program to find the sum of numbers in an ALPHA NUMERIC STRING?

let s2 = "45h6gf45d8f6546d"
let convertString = s2.toLocaleLowerCase()
let sum = 0;
let a = "abcdefghijklmnopqrstuvwxyz"
for (let v of convertString){
    if (!a.includes(v)){
        sum = sum + parseInt(v)
    }
}
console.log(sum)

console.log("question 4-----------------------")

//*4 write a  programme to find the 3rd biggest and 3 rd smallest element in array
function findNum(a){
    let c = a.sort((a,b)=> b-a)

    let big = c[2]
    let small = c[c.length-3]
    return (`3 rd biggest  num : ${big} , and  3 rd smallest num: ${small}`)
}

let array4 = [10,30,8,65,45,32,54,87,3,54,1]

console.log(findNum(array4))

console.log('Question 9-------------------------------------')

//* 9 Write a program to REVERSE THE WORDS in a SENTENCE?

let str9 = 'this is new sentence'
let word = "sentence"
function revWord(word){
    if(str9.includes(word)){
       let newWord =  word.split('').reverse().join('')
       return newWord
    }else return "word not matching"
}

console.log(revWord(word))

//*3. Write a program to find fibanocci series of a number.
console.log('Question 3-------------------------------------')
let sum3 = 10;
let a3 = [0,1]
for (let i= 0; i<sum3-2; i++){
    a3.push(a3[i]+a3[i+1])
    console.log()

}
console.log(a3)


console.log('last line')

//*10. Write a program to convert BINARY to DECIMAL?
let b10 = 10011
function decToBin(n){
    return parseInt(n,2)
}
console.log(decToBin(b10))