let h1 = document.getElementById("head")

// console.log(h1)

h1.style.color = "hotpink";

let h2 = document.getElementById('heading')
// console.log(h2)


let h3 = document.getElementsByClassName("demo")
// console.log(h3)

for(let j =0; j<h3.length; j++){
    h3[j].style.background = '#111'
    h3[j].style.color = '#fff'
}


[...h3].map((v)=>{
    v.style.backgroundColor = "red"
    v.style.color = "#fff"
});


let t = document.getElementsByClassName('a');

[...t].forEach((m)=>{
    m.style.color  = '#fff';
    m.style.backgroundColor = "hotpink";
    m.style.margin = "1rem";
    m.style.borderRadius = '5px';
    m.style.padding = '10px'

})

let a = document.getElementsByTagName('*')
console.log(a)

let sec = document.querySelector('.f1');
console.log(sec)

let art = document.querySelector('#article')
console.log(art)

let r = document.querySelector("a")
console.log(r)


let span = document.querySelectorAll("span")

console.log(span)

span.forEach((c)=>{
    c.style.margin = "2rem"
    c.style.background = "yellow"
    c.style.color = "blue"

})


let div = document.createElement("div")
div.innerHTML = "div container <code> </code>"
console.log(div)

let b = document.querySelector("body");
b.appendChild(div);