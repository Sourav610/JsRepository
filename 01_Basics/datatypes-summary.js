/* two type of data types
primitive datatype, and non primitive datatype
*/

//Primitive - 7 types
/*
 String, Number, Boolean, null, undefined, Symbol,
 BigInt
 */

 // Javascript is dynamic type as variables can hold different types of values during runtime.

 const score = 100
 const ScoreValue = 100.3
const temp = null

 const id = Symbol('123')
 const anotherId = Symbol('123') //symbol helps to create unique value
 console.log(id === anotherId);

 const bigNumber = 1234235423423n // n tells that it is a big int


 //Reference (Non primitive)
 //Arrays, Objects,Functions

//Arrays
const heroes = ["shaktiman","naagraj","doga"]

//Objects
let obj = {
    name: "sourav",
    age: 22
}

//function
const myfunction = function(){
    console.log("Hello world")
}

console.log(typeof myfunction)

//typeof of null\is  object
//return type of non primitive object function
