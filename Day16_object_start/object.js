//! OBJECT

//1)NON PRIMITIVE DATATYPE
//2)USED TO STORE PROPERTY AND METHOD
//3)STORED IN THE FORM OF KEY AND VALUE PAIR
//4)KEY MUST BE UNIQUE
//5)IF PASS SAME KEY WHICH ALREADY PRESENT IN THE OBJECT THEN IT WILL UPDATE PRIVIOUS KEY VALUE PAIR
//6) KEY MUST BE PASS WITHOUT QUOTES
//7)INTERNALLY KEY IS STORE IN STRING FORMAT

let std = {
    name: "jai shanker sir",
    id : 96,
    skills: ['js','react', 'sql'],
    address : {
        area: "talo pali",
        pinCode: 400406,
    },
    demo: function(){
        console.log("demo function")
    },
    name: "sachin",
};
//! using dot notation
console.log(std.name)
console.log(std.name)

//TO CALL FUNCTION WHICH PRESENT IN THE OBJECT
console.log(std.demo())
console.log(std.address.pinCode)
console.log(std.id)

//! using brakcets notation
console.log('-*---------------*********using bracket notation*********-------------')

console.log(std['name'])
std["demo"]()
console.log(std["address"]["area"])