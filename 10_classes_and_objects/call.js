function SetUsername(username){
    this.username = username;
}

function createUser(username, email, password){
    // SetUsername(username) // here function is not called it reference only send
    SetUsername.call(this,username) // this way we can called the function by passing this of this function
    this.email = email
    this.password= password
}

const chai = new createUser("chai","chai@gmail.com","fang")
console.log(chai)
