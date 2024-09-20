//array
// const myArr = [0,1,2,3,4,5,true,"sourav"] //it can be like this also
const myArr = [0,1,2,3,4,5]
// console.log(myArr[0]) 
//shallow copy - it share the same reference
//deep copy - it doesn't share the same reference

const myHeros  = ["shaktiman","naagraj"]
const myarr2 = new Array(1,2,3,4)

//array method
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //it add at the first
// myArr.shift() // it remove the first element

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

const newArr3 = myArr.join()
console.log(myArr);
console.log(newArr3)

//slice, splice
console.log("A ",myArr)

const myn1 = myArr.slice(1,3) //it only return the elment from that position
console.log(myn1)
console.log("B ",myArr)
const myn2 = myArr.splice(1,3) // it modify the existing array and return the position array.
console.log("C ",myArr)
console.log(myn2)