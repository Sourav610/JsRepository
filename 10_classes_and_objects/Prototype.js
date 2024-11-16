let myName = "sourav   "
let myChannel = "chai "

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.sourav = function(){
    console.log(`sourav is present in all object`)
}

Array.prototype.heyHites = function(){
    console.log(`Hitesh says hello`);
}
heroPower.sourav();
myHeros.heyHites()
// heroPower.heyHites() // it will not as function injected to array only

//inheritance

const User = {
    name: "sourav",
    email: "sourav@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js assignment',
    fullTime: true,
    __proto__: TeachingSupport // this is prototypal inheritance it is an old code
}

Teacher.__proto__ = User // this is prototypal inheritance it is an old code

//modern syntax for inheritance

Object.setPrototypeOf(TeachingSupport,Teacher) //here giving acces for teacher to TeachingSupport

let anotherUsername = "chaiAurCode       "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`True length is ${this.trim().length}`)

}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()