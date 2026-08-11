function sayname(){
    console.log("A");
    console.log("K");
    console.log("K");
    console.log("I");
}
// sayname()

// function addTwoNums(num1,num2){//parameters
//     console.log(num1+num2);
// }

function addTwoNums(num1,num2){//parameters
    // let res=num1+num2
    // console.log("tiwary")
    // return res//+++//
    return num1+num2
    
}
// addTwoNums(3,4)//pass argument from here
// addTwoNums(3,null)//pass argument from here
const res=addTwoNums(3,5)
// console.log("Result: ",res);//=>undefined 


// 

function loginUsermsg(username){
    if(!username){
        console.log("Please Enter the username!!");
        return
    }
    //same
    // if(username===undefined){
    //     console.log("Please Enter the username!!");
    //     return
    // }
    return `${username} just logged in....`
}

// loginUsermsg("akki")//=>nothing exectues by this only
// console.log(loginUsermsg("akki"))//=>nothing exectues by this only
// console.log(loginUsermsg())//=>undefined(false)

function calculateCartPrice(...num1){//rest opt
    return num1
}
// console.log(calculateCartPrice(200,400,554))

const user={//object
    username:"akki",
    // price:299,
    prices:199//++++++//
}

function handleObj(anyobject){
    console.log(`UserName is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObj(user)
handleObj({
    username:"sam",
    price:799//+++++//
})

const myNewArray=[200,300,400,500]

function returnSecondval(getArray)
{
    return getArray[1]
}
console.log(returnSecondval(myNewArray))
console.log(returnSecondval([200,300,400,500]));
