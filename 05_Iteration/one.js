// for loop

for (let index = 0; index <= 10; index++){
    const element = index;
    console.log(element)
    if(element == 5){
        break;
    }
}


for (let index = 0; index < 10; index++) {
    // console.log(`outer loop value: ${index}`)
    for(let j = 0; j<= 10; j++){
        // console.log(`Inner loop value ${j} and inner loop ${i}`)
        // console.log(index + '*' + j + ' = ' + index*j)
    }

    
}

let myArray = ["flash","batman","superman"]

for(let index = 0; index < myArray.length; index ++){
    const element = myArray[index];
    console.log(element);
}


// break and continue

for (let index = 1; index < 20; index++) {
    if(index === 5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${index}`)
}
for (let index = 1; index < 20; index++) {
    if(index === 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`)
    
}
