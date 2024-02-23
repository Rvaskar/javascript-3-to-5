//!WAY TO CREATING OBJECT  
//*1) LITERAL
//*2) CLASS CONSTRUCTOR 
//*3)CONSTRUCTOR FUNCTION
//*4)OBJECT CONSTRUCTOR

//! LITERAL 
let e1 = {
    name: "sachin",
    id: 123,
    marks: function(){
        return [90,80,40,70,60,89]
    },
};

//TO ADD KEY AND VALUE IN OBJECT
e1.address={
    area:"thane",
    pin:400401,
};


e1["percentage"]=96;
console.log(e1)

//TO UPDATE VALUE IN OBJECT
e1.id = 300;
e1["name"]= "virat"


console.log(e1.marks())
console.log(e1)

// TO DELETE KEY AND VALUE  IN OBJECT
delete e1.marks;
console.log(e1)

let c = 100
console.log(c)

//! class constructor
//*1) class is blue print to create object
//*2) class name is always in uppercase
//*3) stored in script scope
//*4) Constructor is special type of the method
//*5)inside constructor we could not able to write return keyword
//*6) we call constructor using new keyword
//*7)constructor used to : initialize the value for the keys
//*8)new keyword used to invoke the constructor
//*9) not suppose to create object inside the class
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