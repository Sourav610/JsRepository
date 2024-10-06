const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach( (item) =>  {
//     console.log(item)
//     return item  //it will not return a value
// })

// console.log(values) 

const myNums = [1,2,3,4,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num >4)
// const newNums = myNums.filter( (num) =>  {
//     return num >4
// })

// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)

const books = [
    {
        title: 'Book one', genre:'Fiction',publish: 1981, edition: 2004
    },
    {
        title: 'Book two', genre:'Science',publish: 2000, edition: 1987
    },
    {
        title: 'Book three', genre:'History',publish: 2011, edition: 1996
    },
    {
        title: 'Book four', genre:'Science',publish: 1985, edition: 2000
    },
    {
        title: 'Book five', genre:'Non-fiction',publish: 1997, edition: 1999
    }

]

let userBooks = books.filter( (bk) => bk.genre === 'History')
userBooks = books.filter ((bk) => {
    return bk.publish >= 1995
})
console.log(userBooks)