//In general: "for-in" is used to iterate over objects 
const myObj={
    js:'javascript',
    cpp:'C++',
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myObj) {
    // console.log(key);
    // console.log(myObj[key]);
    // console.log(`${key}->${myObj[key]}`);
}

//For array
const prog=["js","rb","py","java","cpp"]
for (const key in prog) {
    // console.log(key)
    // console.log(prog[key]);
}

//For maps(They are not iterable)
// const map=new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('JAP',"Japan")

// for (const key in map) {
//    console.log(key);  //blank output
// }