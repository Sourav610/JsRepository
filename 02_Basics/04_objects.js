// const tinderUser = new Object() //singleton object
const tinderUser = {} // non singleton object.
tinderUser.id =  "23234d"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"sourav",
            lastname:"kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

// const obj3 = {obj1, obj2} //it will give object inside object
// const obj3 = Object.assign({},obj1,obj2,obj4) //it will combine both object

const obj3 = {...obj1,...obj2}
// console.log(obj3)

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"b@google.com"
    },
    
]

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
