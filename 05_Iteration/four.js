const myObject = {
    js : 'javascript',
    cpp: "c++",
    rb: "ruby",
    swift : "Swift by apple"
}

// for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
   
// }

const programming = ["js","rb","py","java","cpp"]

for (const key in programming){
    console.log(programming[key])
}


const map = new Map()
map.set('In',"India")
map.set('USA',"United State of America")
map.set('Fr', "France")
map.set('In',"India")

//map can't be iterated by for in loop
// for (const key in map){
//     console.log(key)
// }