//POP UP METHOD/FUNCTION

// alert("hey I am alert")

//return  type void
//used to show alert

//-------------------------------------------------------------------------------

// confirm("hey here is confirmation box")

//return  type boolean
//confirm() method use show confirmation box on user answer gives boolean value (True/false)

//---------------------------------------------------------------------------------
// let name1 = prompt("enter your name:")

//return  type string or null

// console.log(name1)
// console.log(typeof name1)  //type of use to check the datatype of data

//------------------------------------------------------------------------------------

//SCOPE IN JAVASCRIPT

//1)GLOBAL ----------------------------------
var n = 'str';

//2)SCRIPT  --------------------------------------
let y= 100;
const c = 500;

//3)LOCAL ---------------------------------------- 
//any variable define inside the function it will store as local scope
function demo() {

    console.log("local scope")

    let note = "We can not access variable outside the function ";
    var note1 = "var store in global scope  we can not access outside ";
    console.log(note);
    console.log("we can access any variable which declare outside of function/in script",n,y,c);
    console.log(note1);
}
demo()
//--------------trying to access function variable outside
try {
    console.log(note1);
    
} catch (error) {
    console.log(error)
}

//4)BLOCK  -----------------------------------------------
// code written in {} without any function
{
    let p1 = '100';
    var p2 = 23;
    const p3 = 45;
    console.log("we can access any variable which declare outside of block/in script",p1,p2,p3);
    console.log("trying to access script variable in block",n,y,c);
    // console.log("block level",p1,p2,p3)
    //code  and variable stored in block scope
}

//f a variable is declared using var inside a function, it cannot be accessed outside the function. This is because variables declared using var are function-scoped, meaning they are only accessible within the function in which they are declared. Once the function finishes executing, the variable is no longer accessible. This is to prevent potential conflicts and unintended side effects from variables with the same name being used in different parts of the code.

// try {
    
//     console.log("trying to access srcipt variable outside function",n,y,c)
//     console.log("trying access block level code outside",p1,p2,p3)
// } catch (error) {
//     console.log(error)
// }

