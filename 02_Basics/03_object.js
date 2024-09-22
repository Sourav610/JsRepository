//singleton -- object made through constructor
// Object.create


//object literals

const mySym = Symbol("key1")
const JsUser={
    name:"Sourav",
    "full Name":"Sourav kumar",
    [mySym]: "myk1", // for using symbol.
    age: 20,
    location:"Banglore",
    email:"sourav@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.age);
console.log(JsUser["age"])
console.log(JsUser["full Name"]) //in this case . cannot be use.
// console.log(JsUser.mySym) //it will give a string value
// console.log(JsUser[mySym]) // it will give a symbol value 

JsUser.email = "hites@google.com"
// Object.freeze(JsUser) // it freeze the object so we cannot modify it.
JsUser.email = "sonu@google.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())