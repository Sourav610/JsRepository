// for of

const arr = [1,3,46,63]

// for (const element of arr) {
//     console.log(element);
// }

// const greeting = "Hello world"
// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);
    
// }

//Maps

const map = new Map()
map.set('In',"India")
map.set('USA',"United State of America")
map.set('Fr', "France")
map.set('In',"India")

// console.log(map)

// for( const [key,value] of map){
//     console.log(key,":-",value)
// }

const myObject = {
    'game1':"NFS",
    'game2':"spiderman"
}

//object is not iterable using for of

// for (const [key, value] of myObject){
//     console.log(key, ':-',value)
// }