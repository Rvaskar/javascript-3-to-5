let e1 = {
    name: "sachin",
    id: 123,
    marks: function(){
        return [90,80,40,70,60,89]
    },
};

e1.address={
    area:"thane",
    pin:400401,
};

e1["percentage"]=96;
console.log(e1)

e1.id = 300;
e1["name"]= "virat"

console.log(e1.marks())
console.log(e1)

delete e1.marks;
console.log(e1)

let c = 100
console.log(c)

//! class constructor

class Employee{
    constructor(name,id,designation){
        this.name = name;
        this.id = id;
        this.designation= designation
    }
}

const e3 = new Employee("sachin", 130, "manager")
const e2 = new Employee("hp", 96, "water boy")


console.log(e3,e2)
e2.id=3000;

console.log(e1,e2)


//! constructor function

function Students(name,id,percent){
    this.name=name;
    this.id= id;
    this.percentage= percent;
}

let s1 = new Students("sehwag",100,75)
let s2 = new Students("Rinku Singh",70,65)

console.log(s1)
console.log(s2)

//!Object constructor

let obj = new Object()
obj.name = "KApil div";
obj.id= 500;
obj.percent = 505;

console.log(obj)


let o2 = new Object({name:"dhawan", id:300})
console.log(o2)

let o3 = new Object(100)
console.log(o3)