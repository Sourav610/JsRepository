const myArr = []
// %DebugPrint(myArr) // it will work on v8 engine which we need install

// Types of array 
// continious(means packed), Holey (means hole in array)

//SMI (small integer)
//Packed element
//Double (float, string, function)

const arrTwo = [1,2,3,4]
//PACKED_SMI_ELEMENT  means packed small integer - it is optimzed ex - arrTwo


arrTwo.push(6.0) // now when we add float valu it become
//PACKED_DOUBLE_ELEMENT - which is less optimize then PACKED_SMI_ELEMENT
//once it is downgraded it cannot be upgraded mean it can't be converted to PACKED_SMI_ELEMENT


arrTwo.push('7')
//PACKED_ELEMENT

arrTwo[10] = 11
//HOLEY_ELEMENT - because the array contains many times of element and there is some hole like missing element.
console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9])


//for holey check
//check for bound 
//check hasOwnProperty(arrTwo, 9)
//check hasOwnProperty(arrTwo.prototype,10)
//check hasOwnProperty(Object.prototype,10)

//we have to keep checking for missing property that why holes are very expensive in js

const arrThree = [1,2,3,4,5]
console.log(arrThree[8])

//Optimize order

// for continues
//SMI > DOUBLE > PACKED

//for holey
//H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3)
//just 3 holes. HOLEY_SMI_ELEMENTS

arrFour[0] = '1' //Downgraded to HOLEY_ELEMENTS

const arrFive = [] // SMI
 

