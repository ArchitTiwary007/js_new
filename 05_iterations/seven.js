const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.map( (num) => num + 10 )


//Chaining
//filter=>condition checking hota h
const newNums=myNums.map( (n) => n*10).map( (n) => n+1).filter( (n) => n >=40 )
console.log(newNums);
