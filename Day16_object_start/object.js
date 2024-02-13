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
console.log(std.demo())
console.log(std.address.area)
console.log(std.id)

//! using brakcets notation
console.log('-*---------------*********using bracket notation*********-------------')

console.log(std["name"])
std["demo"]()
console.log(std["address"]["area"])