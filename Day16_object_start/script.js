//*1) write a programme to find the given year is leap year or not
let year = 2012;
function isLeapYear(y) {
  if (y % 400 == 0 || (y % 4 == 0 && y % 100 != 0)) {
    return "leap year";
  } else return "not a leap year";
}
console.log(isLeapYear(year));
//* wap to merge to arrays with using concat method
let array1 = [10, 20, 30, 40, 50];
let array2 = [20, 30, 40, 20, 4];
let newAr = [...array1, ...array2];
console.log(newAr);
//*3 wap to display the common element between to arrays
console.log("ques3");
let array31 = [10, 50, 3, 54, 875, 4];
let array32 = [12, 54, 10, 6, 598, 3,50];

function commonEle(a, b) {
  a.map((ele) => {
    for (let i = 0; i < b.length; i++) {
      if (b[i] == ele) console.log(ele);
    }
    return ele;
  });
}
commonEle(array31, array32);

//*4 wap to find how many time ele is occurred in given array
console.log('question4')
array4 = [10,20,10,5,96,10,24,12]
function occurredOfEle(b){
    b.filter((ele)=>{
    count = 0;
    let d = ele
    for(let i = 0; i<b.length;i++){
        if(d===b[i]){
            count++
        }
    }

   })
   return count;

}
occurredOfEle(array4)
//*5 wap to find the second occurrance ele in given array

//  function secondOcc(arr,ele){
//     if(arr.include(ele)){
//         arr.map((value,index)=>{
//             // if(){

//             }

//         })
//     }
//  }
//*6
