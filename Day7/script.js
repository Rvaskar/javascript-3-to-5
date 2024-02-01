//! NESTED FUNCTION

let y = 'java'
console.log(y)

function demo(a = 10, b=20, c){
    console.log(a)
    console.log(b)
}
demo(1000,2000)  //just start the debugger to see execution

function outer(){
    var c = "js";
    console.log(c);
    function f1(){
        console.log("nested function")
    }
    f1()  //without calling statement function will not start
}

outer();
var d = "js"
console.log(d)


//! WINDOW OR THIS KEYWORD

var tech = 100;
let tech2 = 2020;

function another(){
    var b = 1000
    console.log(b)
    console.log(this.tech) //here we accessing outer variable with this keyword 
}
another()


//!     CLOSURE

function outer2() {
    let v = 100;
    let s = "js"
    console.log("outer function")
    function inner(){
        console.log(v)  //this is called closure accessing outer function variable inside inner function
        console.log("str")
        console.log("nested function")
    }
}