let gp = document.getElementById("gp")
let p = document.getElementById('p')
let c = document.getElementById('c')


gp.addEventListener(
    "click",
    (e)=>{
        console.log("gp  clicked" + " " + e.eventPhase);
        gp.style.background = "hotpink"
    },
    true  //it decide how the event go capturing phase/ bubble phase == true: capture
)
p.addEventListener(
    "click",
    (e)=>{
        console.log("p  clicked" + " " + e.eventPhase);
        gp.style.background = "cyan"
    },
    false  //it decide how the event go capturing phase/ bubble phase == false: bubble
)
c.addEventListener(
    "click",
    (e)=>{
        console.log("c  clicked" + " " + e.eventPhase);
        gp.style.background = "yellow"
    },
    false  //it decide how the event go capturing phase/ bubble phase == true: capture
)
document.addEventListener(
    "click",
    (e)=>{
        console.log("document  clicked" + " " + e.eventPhase);
        
    },
    false   //it decide how the event go capturing phase/ bubble phase == false: bubble
)