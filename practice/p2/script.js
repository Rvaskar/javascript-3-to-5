let div = document.createElement('div');
div.innerHTML = "<h1> hey buddy can yoy see me?</h1>"


let b = document.getElementById('div1')
console.log(b)
b.appendChild(div)

let usingClasslist = document.getElementsByClassName('hey')
console.log(usingClasslist)

for(let i = 0; i<usingClasslist.length;i++){
    console.log(usingClasslist[i])
    usingClasslist[i].style.color = 'red';
    if(i % 2 == 0){
        usingClasslist[i].style.backgroundColor = 'yellow';
    }else  usingClasslist[i].style.backgroundColor = 'lightgreen';

}