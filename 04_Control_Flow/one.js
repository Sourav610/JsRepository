//if

const isUserLoggedIn = true
const temperature = 41

// if(temperature < 50){
//     console.log("less than 50")
// }
// else{
//     console.log("temperatur is greater than 50")
// }

// <, >, <=, >=, ==, != ,===(it also check the type),!==,

const balance = 1000

// if(balance > 500) console.log("test"),console.log("test2"); //should not use like this

// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 759")
// }
// else if(balance < 900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in")
}