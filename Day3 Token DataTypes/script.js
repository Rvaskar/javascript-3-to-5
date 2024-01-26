//!TOKENS
//!--------1) IDENTIFIER -----------
//------------Rules:
//i)Should not start with number but its contain numbers
//ii)Should not contain space
//iii)No other special character contain other than $ and _
//iv)Do not have contain keyword/ reserve Word
//!--------2) KEYWORDS -----------
//!--------3) LITERS -----------
//!--------4) OPERATORS -----------

//*--------  //!  DATATYPES  --------

//!-----------------   PRIMITIVE DATATYPE
//PRIMITIVE DATATYPE ARE IMMUTABLE

// typeof ==> is operator or keyword use to check datatype
//! number:

const number1 = 100;
console.log("type of number1: ", typeof number1);

//! String
//three ways to define string

let str = "hello";
let str2 = "world";
let str3 = `${str} ${str2} ${10 + 2} i am here`;  //interpolation => perform any operation with in string
console.log(str3)  //!hello world 12 i am here
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
console.log(a1 == a2)  //true    //! == operator check for value only not datatype
console.log(a1 === a2)  //false    //! === operator check for value  and datatype


//! ---------- BOOLEAN----------
//------TRUE OR FALSE--------
let bool1 = true;  //* TAKES TRUE OR FALSE
console.log(typeof bool1)  //boolean
console.log(typeof typeof bool1)  //string
