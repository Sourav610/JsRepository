//Immediately Invoke Function Expression (IIFE)

//To remove pollution occuring from global scope.
(function chai(){
    //named IIFE
    console.log("DB CONNECTED");
})(); 

//when using iife ; is must needed.

((name) =>{
    //unnamed IIFE
    console.log(`DB CONNECTED TO ${name}`);
})('sourav')