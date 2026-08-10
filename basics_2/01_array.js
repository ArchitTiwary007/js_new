//Array
const myArr=[0,1,2,3,4,5]
const myheros=["tappu","goli"]

const myArr2=new Array(1,2,3,4)
console.log(myArr[1]);

//Array methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));//checks and returns value exits or not!!

// const newArr=myArr.join()
// console.log(myArr);//index
// console.log(typeof newArr);

//slice,splice(imp differnce)

console.log("A ",myArr);

const myN1=myArr.slice(1,3)//index 1 se 2 tk ka value return krega
console.log(myN1);
console.log("B ",myArr);

const myN2=myArr.splice(1,3)//manipulates original array =>removes and returns reequired index elements!!
console.log("C ",myArr);
console.log(myN2);