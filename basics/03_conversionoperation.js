//tc39 && mdn for resources!!

let score="11ac"
// console.log(typeof score);
// console.log(typeof (score));

let valueInNUmber=Number(score)
// console.log(typeof valueInNUmber);
// console.log(valueInNUmber);

//conversion
//"33"=>33
//"33"=>NaN
//true=>1;false=>0

let isLoggedIn="tappu"
let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

//""=>false
//"tappu"=>true

let someNum=11

let strNum=String(someNum)//conversion to string
// console.log(strNum);
// console.log(typeof strNum);

//OPERATIONS//
let value=5
let negval=-value
// console.log(negval);

let str1="hello"
let str2=" sir"

let str3=str1+str2
// console.log(str3);

//problems
// console.log("1"+2)
// console.log("2"+1)
// console.log("1"+2+2);//starting val pe depend krta hai
// console.log(1+2+"2");//This works(But not used in big projects)

// console.log((3+4)*5%3);

// console.log(+true);//true+ not possi
// console.log(+"")

let n1,n2,n3//Not a good practice
n1=n2=n3=2+2

let gameCounter=111
// gameCounter++;
++gameCounter;
console.log(gameCounter);
