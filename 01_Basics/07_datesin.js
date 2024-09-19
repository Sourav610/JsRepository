let myDate = new Date()
console.log(myDate);
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)

// let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2023,0,23,5,3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myCreatedDate.getTime()) // it show the total time from January 1, 1970
console.log(Math.floor(Date.now()/1000)) // time in sec

let newDate = new Date()
console.log(newDate.getDate())
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

// `${newDate.getDay()}` and the time -- sometimes dev do like this

newDate.toLocaleString('default',{
    weekday: "long"
})