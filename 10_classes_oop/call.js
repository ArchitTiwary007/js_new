function setUsername(username) {
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password) {
    setUsername(username)//call ho rha pr execution hold nhi reh paa rha => its only a refernce

    setUsername.call(username)//correction=>.call(to hold its refernce)

    setUsername.call(this,username)//Proper execution=>to print the value use "this" keyword{this,....}

    this.email = email
    this.password=password
}

const chai = new createUser("chai", "chai@google.com", "123")
console.log(chai);
