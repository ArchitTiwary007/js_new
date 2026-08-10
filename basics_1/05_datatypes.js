//Primitive Datatypes
//7 types: String,Number,Boolean,null(empty),undefined,symbol,bigint

//symbol=>Uniqueness provide krta hai
// const id=Symbol('123')
// const anotherId=Symbol('123')

// console.log(id===anotherId);

const bigNumber=564698878777656544n
const outTemperature=null
const scoreVal=23

//JS is Dynamically Typed language

//Non-Primitive(Reference Types)
//Array,Objects,Functions

const heros = ["Tappu","Goli","Pinku"];
let myObj={
    name:"akki",
    age:22,
}
const myfunction=function(){
    console.log("Hello Duniya");
}

// console.log(typeof scoreVal)
// console.log(typeof myfunction)

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Stack(Primitive),Heap(Non-Primitive)

//stack
let myYtname="akkivinesdotcom"

let anotheryt=myYtname
anotheryt="codewidakki"

// console.log(anotheryt)
// console.log(myYtname)

//heap
let userOne={
    email:"user@microsoft.com",
    upi: "user@ybl"
}

let userTwo=userOne//userTwo m userOne ka reference daal diye hai

userTwo.email="akki@google.com"

console.log(userOne.email);
console.log(userTwo.email);

