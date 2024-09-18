const score = 400
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(4)); 

// console.log(otherNumber.toLocaleString('en-IN'))

//++++++++++++++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++
console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.5))
console.log(Math.ceil(4.2)) // it give higher value
console.log(Math.floor(4.9)) // it give lower value
console.log(Math.min(4,3,9,8))
console.log(Math.max(4, 3, 6, 9, 10))

console.log((Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min+1))+ min)