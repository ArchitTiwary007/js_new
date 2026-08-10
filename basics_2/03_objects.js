//"singleton"=>jab constructor se banega tab wo singleton ho skta h!!
// Object.create


//"objects literals" se declare krenge object to singleton nhi hoga!!

const mySymb=Symbol("key1")

const jsUser={//key-value pairs
    name:"Archit",
    "full name":"Archit Tiwary",
    [mySymb]:"mykey1",//use [] to use it as a symbol!! 
    age:18,
    location:"Japan",
    email:"akki@google.com",
    isLogg:false,
    lastLogg:["Monday","Friday"]
}
// console.log(jsUser.location)
// console.log(jsUser["location"])
// console.log(jsUser["full name"])//++++++
// // console.log(typeof jsUser.mySymb)
// console.log(jsUser[mySymb]);//+++++++

jsUser.email="hitesh.chatgpt@gmail.com"
// Object.freeze(jsUser)
jsUser.email="tappu@microsoft.com"
console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello People!!");
}
jsUser.greetingTwo=function(){
    console.log(`Hello People!!,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
// console.log(jsUser.greeting);//returns functino ka reference