let form = document.querySelector('.form-control');

let percentage = document.getElementById('percenatge');

percentage.addEventListener('input', (e)=>{
    let percentage1 = percentage.value;
    let perct = document.getElementById('perct');
        perct.innerHTML = `${percentage1}%`
})


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let formData = new FormData(form);
    let data = Object.fromEntries(formData);
    console.log(data)

    console.log(`name = ${data.name}, password = ${data.password} , percenatge = ${data.percentage} and  Gender = ${data.gender}`); 
    console.log("hello")

})