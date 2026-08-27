function multiplyBy5(n) {
    return n * 5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);
//js is a prototypal language 
//object hai at the end!!
//obj ka prototype => null

function createUser(username, score) {
    this.username = username
    this.score = score
    
}

createUser.prototype.increment = function () {
    this.score++;//this => jiska bhi pucha hai uska value return kro 
}
createUser.prototype.printMe = function () {
    console.log(`Price is ${this.score}`);
}

//error
// const chai = createUser("chai", 25)
// const tea = createUser("tea", 50)

const chai = new createUser("chai", 25)
const tea = createUser("tea", 50)

chai.printMe()

