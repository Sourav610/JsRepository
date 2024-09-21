const marvel_heros = ['thor',"Ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

// marvel_heros.push(dc_heroes)

// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heroes)
// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heroes] //spread operator - it will make all value of array individual
// console.log(all_new_heros);

const another_array = [1,2,3, [4, 5,6],7,[6,7,[4, 5]]]

const real_another_array = another_array.flat(Infinity) // it will return a single array of all value
console.log(real_another_array);


console.log(Array.isArray("Sourav")) //it checks if it is an array or not
console.log(Array.from("Hitesh"))
console.log(Array.from(({name:"sourav"}))) //intersting case as it will not able to detect which to use for making array
//like take keys or value for making array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
