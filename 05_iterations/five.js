const coding=["js","ruby","java","python","cpp"]
//callback function=>No function name but has a parameter
// coding.forEach( function (item) {
//     console.log(item)
// } )

//M-2(Using Arrow function)

// coding.forEach( (val) => {
//     console.log(val);
    
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (val,index,arr) => {
//     console.log(val,index,arr);
// })

//obj under array ka iteration
const myCode=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
]
myCode.forEach( (item) => {  //use arrow functions
    // console.log(item.languageName);
    // console.log(item.languageFileName);

    console.log(`${item.languageName} => ${item.languageFileName}`);
})