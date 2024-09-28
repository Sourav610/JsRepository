var c = 10
if(true){
    let a = 10
    const b = 20
    // console.log("Inner: ",a)
}
// console.log(a)
// console.log(b)
// console.log(c)


//nested scope

function one(){
    const username = "sourav"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}

// one()

if(true){
    const username = "sourav"
    if(username === "sourav"){
        const website = " youtube"
        // console.log(username+website)
    }
    // console.log(website)
}

// console.log(username)



//++++++++++++++++++++++++++++++++++++++intersting+++++++++++++++++++++++++++++++++

addone(5) //it will not give error
function addone(num){
    return num + 1
}

addTwo(5) // but it will give error as it hold the function
const addTwo = function(num){   // it also sometimes called expression
    return num + 2
}

