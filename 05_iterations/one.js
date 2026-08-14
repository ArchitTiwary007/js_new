// for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element==5){
//         console.log("5 is best number")
//     }
//     console.log(element);
// }


// for (let i = 1; i <=10; i++) {
//     console.log(`Outerloop value: ${i}`);
//     for (let j = 1; j <=10; j++) {
//         // console.log(`Inner loop value ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + '=' + i*j);//multiplication table   
//     } 
// }

let myArr=["superman","batman","ironman"]
console.log(myArr.length);
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element);
}

//break and continue

for (let i = 1; i <=20; i++) {
    if(i==5){
        // console.log(`Detected 5 then break`);
        // break;
        console.log(`Detected 5 then continue`);
        continue;
    }
    console.log(`Value of i is ${i}`);
}
