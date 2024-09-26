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

// console.log(loginUserMessage())

function calculateCartPrice(val1, val2,...num1){  //it also known as rest operator.
    return num1
}

console.log(calculateCartPrice(200,400,500,600))

const user = {
    username: "sourav",
    price: 299
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray = [200, 400, 234,988]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([2343,566]))