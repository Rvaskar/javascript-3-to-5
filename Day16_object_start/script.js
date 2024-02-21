//*1) write a programme to find the given year is leap year or not
let year = 2012;
function isLeapYear(y) {
  if (y % 400 == 0 || (y % 4 == 0 && y % 100 != 0)) {
    return "leap year";
  } else return "not a leap year";
}
console.log(isLeapYear(year));
//* wap to merge to arrays without using concat method
let array1 = [10, 20, 30, 40, 50];
let array2 = [20, 30, 40, 20, 4];
let newAr = [...array1, ...array2];
console.log(newAr);
//*3 wap to display the common element between to arrays
console.log("ques3");
let array31 = [10, 50, 3, 54, 875, 4];
let array32 = [12, 54, 10, 6, 598, 3,50];
let res3 = []

function commonEle(a, b) {
  a.filter((ele) => {
    for (let i = 0; i < b.length; i++) {
      if (b[i] == ele){
        res3.push(ele)
        return ele
      };
    }
    // console.log(ele)
    // return ele;
  });
  
}

commonEle(array31, array32);
console.log([...new Set(res3)])

function commEle(a,b){
  return a.filter((ele)=>{
    if(b.includes(ele)){
      return ele
    }
  })
}
console.log("this new way:",commEle(array31, array32))

//*4 wap to find how many time ele is occurred in given array
console.log('question4')
let array4 = [10,20,10,5,96,10,24,12]
function occurredOfEle(b){
    return b.filter((ele)=>{
    let count = 0;
    let d = ele
    for(let i = 0; i<b.length;i++){
        if(d===b[i]){
            count++
        }

        return `${ele}: ${count}`
    }

   })
  //  return count;

}
occurredOfEle(array4)
//*5 wap to find the second occurrance ele in given array

//  function secondOcc(arr,ele){
//     if(arr.include(ele)){
//         arr.filter((value,index)=>{
//             // if(){

//             // }

//         })
//     }
//  }
let array5 = [10,20,10,5,96,10,24,12,96]
function findOccurrence(arr, ele) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      count++;
    }
  }
  return count;
}
function findOccurrences(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    let occurrence = findOccurrence(arr, ele);
    if (result.hasOwnProperty(ele)) {
      result[ele] = [result[ele], occurrence];
    } else {
      result[ele] = occurrence;
    }
  }
  return result;
}
console.log( findOccurrences(array5))
//*6
