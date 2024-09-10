//declaring constant
const accountId = 12334

//declaring variable
let accountEmail = "sourav@gmail.com"
var accountPassword = "w3werw" 
accountCity = "Jaipur" // variable can be declare like this also
let accountState

// accountId = 2  // constant variable cannot be change
accountEmail = "sour23@gmail.com"
accountPassword = "2343"
accountCity = "benglurur"

console.log(accountId)
// printing all the variable value in a table format

/*
Prefer not to use var because
of issue in block scope and functional scope
*/

// not declare variable contain undefine as default.
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])