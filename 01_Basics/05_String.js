const name = "sourav"
const repoCount = 50

console.log(name + repoCount+" Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
const gameName = new String('Sourav-kumar')
// console.log(gameName[0])
// console.log(gameName.__proto__) //it tells it is a object

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('r'))

const newString = gameName.substring(0,4) //we cannot use negative value here.
console.log(newString)

const anotherString = gameName.slice(-8,4) // here we can pass negative value also which give reverse value
console.log(anotherString)

const newStringOne = "  sourav  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://hitesh.com/hitesh%20choudhary"//browse didn't understand space it replace with %20
url.replace('%20','-')
console.log(url.includes('hitesh'))

console.log(gameName.split('-'))