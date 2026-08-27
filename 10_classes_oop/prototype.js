// let myName = "archit"
// let myName = "archit    "
// console.log(myName.length);
// // console.log(myName.truelength);
// console.log(myName.trim().length);


// let myName = "archit    "
// let myChannel = "car   "

// console.log(myName.truelength);


let myHeros=["thor","spiderman"]//Array

let heropower = { //Object
    thor:"hammer",
    spiderman: "web",

    getSpiderPower: function () {
        console.log(`Spidey Power is ${this.spiderman}`);
    }
}

Object.prototype.archit = function () {
    console.log(`Archit is present in all objects`)
}
Array.prototype.heyakki = function () {
    console.log(`Say hellow`);
    
}

// heropower.archit()
// myHeros.archit()
// myHeros.heyakki()//array ko power diye obj ka 
// heropower.heyakki()//=>error

//INHERITANCE

const user = {
    name: "akki",
    email:"chai@google.com"
}
const teacher = {
    makevid:false
}

const teachingsupport = {
    isvail:false
}

const TAsupport = {
    makeAssignment: 'JS Assignment',
    fulltime: true,
    __proto__:teachingsupport
}
teacher.__proto__=user

//modern syntax
Object.setPrototypeOf(teachingsupport,teacher)

let anotherUsername = "CarAurCharcha   "
String.prototype.trueLength = function () {
    // console.log(`${this.name}`);//=>undefined
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"archit".trueLength()
"coffee".trueLength()
