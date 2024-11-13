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