function sayMyname(){
    console.log("S");
    console.log("O");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("V")
}

// sayMyname()   // if we only write only name of function then it is 
              // it is function reference and if we add () it will execute it.

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2)
// }        

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1+number2
} 
const result = addTwoNumbers(3,4)

// console.log("Result: ",result)

function loginUserMessage(username = "sam"){ //default value
    // if(username === undefined){
    //     console.log("Please enter a username")
    //     return
    // }
    if(!username){ //same as above
            console.log("Please enter a username")
            return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())