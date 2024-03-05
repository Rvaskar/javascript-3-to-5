let form = document.querySelector('.form-control');

let percentage_input = document.getElementById("percentage");
percentage_input.addEventListener('input', (e)=>{
    let s = document.querySelector(".display_perc");
    let val = percentage_input.value;
    s.innerHTML = `${val}%`
})

let skills = [ ];

let course = document.getElementsByName('course');
form.addEventListener("submit",function(e){
    e.preventDefault();
    let fd = new FormData(form);
    let finalData = Object.fromEntries(fd);

    [...course].map((v)=>{
        if(v.checked) skills.push(v.value);
    });

    finalData.course = skills;
    console.log(finalData)
})


//!json
let obj = {
    name : 'sachin',
    id : 100,
    skill : ['js','java'],
    children: 2

}
let convertToString = JSON.stringify(obj);
console.log(convertToString)

let parse = JSON.parse(convertToString)
console.log(parse)