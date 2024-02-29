// let h1 = document.getElementById("head")
// let c = h1.classList.toggle("demo");

// console.log(c)

// setInterval(() => {
//     h1.classList.toggle("demo")
// }, 1000);


// h1.onclick = function(){
//     console.log("hello")
// }


//!EXAMPLE

let s = document.getElementById('container');
let b1 = document.getElementById("hide");

let b2 = document.getElementById('show');

// b1.onclick=(e)=>{
//     s.style.visibility = 'hidden';
    
// }

// b2.onclick=(e)=>{
    
//     s.style.visibility = 'visible';
// }

// b1.onclick = function(e){
//     let t = s.classList.toggle("test");
//     // console.log(t)
//     if(t){
//         s.style.visibility='hidden'
//         b1.innerHTML = "show"
//     }else{
//         s.style.visibility='visible'
//         b1.innerHTML = "hide"

//     }
// }


b1.addEventListener("click",function(e){
    let t = s.classList.toggle("test");
        if(t){
            s.style.visibility='hidden'
            b1.innerHTML = "show"
        }else{
            s.style.visibility='visible'
            b1.innerHTML = "hide"
    
        }
}, true)

