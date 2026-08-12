const user={
    username:"akki",
    price:999,

    welcomeMsg: function(){
        console.log(`${this.username} , Welcome to Website`);
        console.log(this);
    }
}
// this=>current user ko refer krta hai

// user.welcomeMsg()
// user.username="sam"
// user.welcomeMsg()

// console.log(this)//In node this is {}=>empty 

// console.log(this)//In direct console 'this' returns "window"

// function chai()  //Returns multiple values using this style!!
// {
//     let username="akki"
//     // console.log(this);
//     console.log(this.username); //undef
// }
// chai()


//Arrow function
const chai= () =>{
    let username="akki"
    console.log(this);//=>{}
    // console.log(this.username); //undef
}
// chai()

// const addTwo=(num1,num2)=>{ //Basic Arrow Function!!(++Explicit return++)
//     return num1+num2;
// }

// const addTwo=(num1,num2)=>(num1+num2);//++++++Implicit return//
// console.log(addTwo(3,4));

//{}=> use return
//()=>No need to return

const addTwo=(num1,num2)=>({username:"archit"});//For obj output!!
console.log(addTwo(3,4));
