let d  = document.getElementsByClassName("container")[0]

let s = document.createElement("section");
s.innerHTML = '<h1>this is section tag</h1>';

let a = document.createElement('article');
a.innerHTML = '<h2>Article tag</h2>';

d.append(a,s)

let m = document.querySelector('#demo');
m.setAttribute("title", "javascript is a client side scripting language");

let input = document.querySelectorAll("input");
input.forEach((V)=>{
    V.setAttribute('required', "");
    V.removeAttribute("name");
});

let h1 = document.getElementById("h1");
let res = h1.getAttribute("class");
console.log(res);

let btn = document.querySelector('#btn');
let r1 = btn.hasAttribute("type");
console.log(res)



let d1 = document.getElementById("cont1");
// d1.setAttribute("class", "demo");

// d1.setAttribute("class","div_tag")

d1.className = 'd3';

d1.classList.add("demo","cont","hello","d3")

d1.classList.remove('cont')

var a1 = d1.classList.contains("demo1")

console.log(a1)