//! FUNCTION
let c = 300;
function fun(a, b) {

    console.log(a,b)
    console.log('hello')
    let c = 100;
    console.log(c)
    console.log('end')
    
}
fun(10,20,60) //10 20  //* if we pass three argument but function have only two then function accept first two argument
 //* hello  100  end

function demo(a = 500, b = 600) {
    console.log(a,b)
}
//we can pass values in parameter

console.log(typeof demo);   //function