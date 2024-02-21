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
let d1 = "js"
console.log(d1) 


//! WINDOW OR THIS KEYWORD

var tech = 100;
let tech2 = 2020;

function another(){
    var tech = 1010;
    var b = 1000
    console.log(b)
    console.log(tech)
    console.log(this.tech) //here we accessing outer variable with this keyword 
}
console.log(window)
console.log(this.d)
another()


//!     CLOSURE

let v = 100;
function outer2() {
    let s = "js"
    console.log(v)
    console.log("outer function")
    function inner(){
        console.log(s)  //this is called closure accessing outer function variable inside inner function
        console.log("str")
        console.log("nested function")
    }
    inner()
}
outer2()