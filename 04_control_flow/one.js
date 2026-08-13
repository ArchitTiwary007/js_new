//if
// const isUserLoggedIn=true
// const temperature=59

// if(temperature<50){
//         console.log("less than 50");
// }else{
//     console.log("temp greater than 50");
// }
// console.log("Executes always");
//<,>,<=,>=,==,!=,===,!==


// const score=200
// if(score>100){
//     let power="fly"
//     console.log(`User power:${power}`);
// }
// console.log(`User power: ${power}`);

//short hand notation
// const bal=1000
// if(bal>500) console.log("test"),console.log("test2");//+++NOt used+++

// if(bal<500){
//     console.log("less");
// }
// else if(bal<750){
//     console.log("less1");
// }
// else if(bal<900){
//     console.log("less2");
// }
// else{
//     console.log("less3")
// }

const userLoggedIn=true
const debitCard=true
const LoggedInFromGoogle=false
const LoggedInFromEmail=true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy Mercerdes");
}
if(LoggedInFromEmail || LoggedInFromGoogle || guestUser){
    console.log("User Logged In!!")
}