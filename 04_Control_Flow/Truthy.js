const userEmail = "h@hitesh.ai"

if(userEmail){
    console.log("Got user email")
}else{
    console.log("Don't have user email")
}

//false values are 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values are
//"0",'false'," ",[],{},function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty")
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

//Nullish Coalescing operator (??):null undefined

let val1;
// val1 = 5 ?? 10  //it checks the null or undefined and assigned valued based on given data
// val1 = null ??10 // basically it assing first value if null or undefine is not there
// val1 = undefined ?? 15
val1 = null  ?? 10 ??20
console.log(val1)


//Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")