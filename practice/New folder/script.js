//removing duplicate array element
let array = [10,20,30,40,50,20,30,40,70]
let array2 = [10n,20,true,"hey",60,false,true,10n,"hey",20,10,100]

let newArr = new Set(array2)
console.log([...newArr]) //(8) [10n, 20, true, 'hey', 60, false, 10, 100]

//to add to array
let combine = [...array,...array2]
console.log(combine) //(21) [10, 20, 30, 40, 50, 20, 30, 40, 70, 10n, 20, true, 'hey', 60, false, true, 10n, 'hey', 20, 10, 100]

//set is use to create group of unique element

//* SPREAD OPERATOR
//!for above we use spread operator (...array_name) it will make copy of array
//*if you don't use spread then the original array will be changed because js pass by reference not
