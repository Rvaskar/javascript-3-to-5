let div = document.getElementsByClassName("container")[0]

div.onmouseover = ()=>{
    console.log('hello')
}


div.addEventListener("mouseover", function(e){
    console.log(e)
    div.style.background = 'hotpink'
})

div.addEventListener("mouseout", function(e){
    console.log(e)
    div.style.background = 'none'
})


let t = document.querySelector('#message');
console.log(t)


t.addEventListener("keyup",(e)=>{
    console.log(e)
    console.log('hello')
})

t.addEventListener("keydown",(e)=>{
    console.log(e)
    let n = Math.floor(Math.random() * (999999 - 100000) + 100000)
    let b = document.querySelector("body");
    b.style.background = `#${n}`
})

t.addEventListener("keypress",(e)=>{
    console.log(e)
    console.log('hello')
})



let form = document.querySelector(".form-control")

let un = document.querySelector('#username')
let pass = document.querySelector('#password')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let username = un.value;
    let password = pass.value;
    console.log(username,password)
})