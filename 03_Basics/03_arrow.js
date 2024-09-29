const user = {
    username:"sourav",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`)
        // console.log(this)
    }
}

//this represent current context

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this) //it will show because current node is empty but it will show window object
//in browser as window object is global object in browser


// function chai(){
//     let username = "sourav"
//     console.log(this.username) // we cannot use this inside function like this
// }

// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username)
// }

//++++++++++++++arrow function+++++++++++++++++

const chai = () => {
    let username = "sourav"
    console.log(this)
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) => (num1 + num2) //implicit return as return not used when small bracket used.

const addTwo = (num1,num2) => ({username:"sourav"}) //when using object curly braces needed


console.log(addTwo(3,4))

const myArray = [2,3,5,5]

// myArray.forEach(() => ())
