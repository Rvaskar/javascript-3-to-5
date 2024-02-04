
let word = "hello"

word.charAt(0)  // returns 'h'
word.concat("'","world")    // returns "hello'world"
word.startsWith("H")    // returns false
word.startsWith("h")    // returns true
word.endsWith("o")    // returns true
word.includes("x")  // returns true
word.indexOf("l") //returns 2
word.lastIndexOf("l") //return 3
console.log(word.match(/[A-Z]/g))    // null
console.log(word.match(/[h-z]/g))    // (4) ['h', 'l', 'l', 'o']
console.log(word.padStart(6,"?")) //?hello
console.log(word.padEnd(6,"?")) //hello?
console.log(word.repeat(3)) //hellohellohello
console.log(word.replace("hel","cha")) //chalo
console.log(word.search("e")) //1
console.log(word.slice(1,3)) //el
console.log(word.split("")) //(5) ['h', 'e', 'l', 'l', 'o']
console.log(word.substring(2,4)) //ll
console.log(word.toLowerCase()) //hello
console.log(word.toUpperCase()) //HELLO
console.log(word.trim()) //hello
console.log(word.trimEnd()) //hello
console.log(word.trimStart()) //hello