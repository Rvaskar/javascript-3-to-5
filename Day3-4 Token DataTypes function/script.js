//!TOKENS
//!--------1) IDENTIFIER -----------
//------------Rules:
        //i)Should not start with number but its contain numbers
        let a12 = 400  //*possible
        // let 12a = 440   //*not possible

        //ii)Should not contain space
        // let str ing= 100 //* not Possible
        let str_ing= 100 //* Possible
        //iii)No other special character contain other than $ and _
        let $ = 14  //* Possible
        let _ = 14  //* Possible
        console.log($,_) // 14
        //iv)Do not have contain keyword/ reserve Word
        
//!--------2) KEYWORDS -----------
      //their are some keyword thats are predefine in the javascript like ==> //* if , else, for, function, class, switch, new, typeof
//!--------3) LITERALS -----------
      //the process of assigning value to the variable is known as literals
//!--------4) OPERATORS -----------
      //operations  are the symbols which are use to perform task/ operations on datatypes
      //* arithmetic, logical, ternary

//*--------  //!  DATATYPES  --------
// ----------- 1) Primitive -------------*****-------------- 2)non-primitive

//!-----------------   PRIMITIVE DATATYPE
//PRIMITIVE DATATYPE ARE IMMUTABLE

//!TYPEOF --------------------------------------------

// typeof ==> is operator or keyword use to check datatype

let b= 10 
console.log(typeof b)  //*number
console.log(typeof typeof b) //*string   -------if we written more than one type of then it will always show string

//*--------------------------------------------------------------
//! number:

const number1 = 100;
console.log("type of number1: ", typeof number1);

//! String
//three ways to define string

let str = "hello";
let str2 = "world";
let str3 = `${str} ${str2} ${10 + 2} i am here`;  //! interpolation => perform any operation with in string
console.log(str3)  //hello world 12 i am here
console.log(
  "type of str : " +
    typeof str +
    " str2:" +
    typeof str2 +
    " str3:" +
    typeof str3
); //type of str : string str2:string str3:string

//!  -------------------  ==   &  === operator ------------------------------
let a1 = 10
let a2 = '10'
console.log(a1 == a2)  //true    //! == operator check for value and compare not datatype
console.log(a1 === a2)  //false    //! === operator check for value  and  datatype and compare


//! ---------- BOOLEAN----------
//------TRUE OR FALSE--------
let bool1 = true;  //* TAKES TRUE OR FALSE
console.log(typeof bool1)  //boolean
console.log(typeof typeof bool1)  //string

//! BigInt

let c = 100
console.log(typeof c) //number
c = 100n  //* we can write any number as a bigint like this
console.log(typeof c)  //bigint

//! undefined

let x ;
//* declaring variable without value
console.log(x)  //undefined
console.log(typeof x) //*undefined

//undefined is datatype and //*not define is error

//!NaN
let b12 = "string"
console.log(typeof b12)  //*string

let b121 = parseInt(b12);
console.log(typeof b121)  //* Number

console.log(isNaN(b121))  //true     //* NaN stands for Not a number

//* isNaN()
//return  false if the given argument is a number
//return   true if the given argument is other than number


let y = "100"
let res = parseInt(y)
console.log(res) //100

let d = "string"
let res1 = parseInt(d)
console.log(res1)  //NaN   
console.log(typeof res1)  //number  //* type of NaN is number

console.log(isNaN(100)) //false
console.log(isNaN(d))  //true

console.log(Number.isNaN(100)) //false
console.log(Number.isNaN(res1))  //true

//! null
let a = new Array();

a = null;
console.log(typeof a)  //object
