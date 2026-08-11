// var c=800
let a=300
if(true)
{
    let a=10
    const b=20
    // var c =30
    // c =30
    // console.log("Inner: ",a);
}



// console.log(a);=>error as no return statement is used
// console.log(b);=>"same"
// console.log(c);
// console.log(a);

//++++++Nested Scopes!!+++++++++

function one(){
    const username="akki"

    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username="akki"
    if(username==="akki"){
        const website=" yt"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//+++++++++++++++++INTERESTING+++++++++++++
console.log(addone(5))//=>Gives output!!
function addone(num){
    return num+1
}

addTwo(4) //=>Error
const addTwo=function(num){//variable hold=>hoisting!!
    return num+2;
}
