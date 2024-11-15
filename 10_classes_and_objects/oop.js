const user = {
    username: "sourav",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(this)
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
console.log(this)

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    function getUserDetails(){
        console.log("Gerring user details")
    }
}

//new key word used to create new instance using constructor function.
const userOne = new User("hitesh",12, true)
const userTwo = new User("sourav",22,false);
console.log(userOne)
console.log(userTwo)