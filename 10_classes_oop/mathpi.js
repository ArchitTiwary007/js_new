//Won't get overwritten 
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


const descript = Object.getOwnPropertyDescriptor(Math, "PI")//hidden stuffs of the object ke baare mein batao
// console.log(descript);

const chai = {
    name: 'ginger chai',
    price: 200,
    isAvailable: true,
    
    //situation: code fatt gya hai!!=>Code dikh rha hai!!
    orderChai: function () {
        console.log("chai nhi bani=>code fatt gya!!!");
        
    }
}
// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai));//=>undefined
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, 'name', {
    // writable: false,
    // enumerable:false
    enumerable:true
})

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));


// Not iterable  on object directly
// for (let [key,value] of chai) { 
//     console.log(`${key} : ${value}`);
// }

// Now iterable use of (entries)
//++++++++++++++++++++++++++++//
for (const [key,value] of Object.entries(chai)) {
    //handling "code fatt gya" situation
    if (typeof value !== 'function') {
      console.log(`${key}=>${value}`);  
    }
    
}
