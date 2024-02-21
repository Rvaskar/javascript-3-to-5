let str = "javascript";
console.log(...str);

let ar = [10,20,30];
console.log(...ar)

let obj = {
    name1: "sachin",
    id:123,
    perc:97,
};

let {name1,id,perc} = obj
console.log(name1);
console.log(id);
console.log(perc);


//! OBJECT DESTRUCTURING

let std = {
    name : "rohit",
    id : 45,
    skills : ["nextjs", "node", "SDLC"],
    ad:{
        area : "talao pali",
        pinCode: 400505,
    }
}

let {skills,name,id:sID,ad} = std

console.log(sID)
console.log(skills)
console.log(ad) //here ad is also object using that ad we able to destructUring that nested onject
//!REST OPERATOR IN OBJECT

let emp = {
    name: "virat",
    id : 200,
    skills : ["java", "python"],
    ad:{
        area : "talao pali",
        pinCode: 400505,
    }
}



let {name:ename, ...d} = emp;

console.log(ename)
console.log(d)


//WAYS OF FUNCTION PASSING IN OBJECT

let obj1 = {
    name: "sachin",
    f1:function(){
        console.log("function")
    },
    getName(){
        console.log("With out key word")
    },
    ar: ()=>{
        console.log("Arrow function")
    },
    n: function demo(){
        console.log("named function")
    },
}
obj1["f1"]();
obj1.getName()
obj1.ar();
obj1.n();

//! this keyword

const std1 = {
    name : "viru",
    fun: function(){
        console.log(this)
    },
    ar:()=>{
        console.log(this)
    }
}

std1.fun();
std1.ar();


//! merging two object

let o1 = {
    name: "sachin",
    id : 123,
    skills: ["java","python"],
}

let ad1 = { 
    pinCode: 412545,
}

let demo1 = {
    key1: "value",
}

let r1 = Object.assign(o1,ad1,demo1)

console.log(r1)
console.log(o1)
console.log(r1 === o) //true

console.log(ad1)
console.log(demo1)