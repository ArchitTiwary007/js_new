//ES-6 or ECMA
// class User{
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword() {
//         return `${this.password}car`
//     }
//     capitalise_user() {
//         return `${this.username.toUpperCase()}`

//     }
// }

// const chai = new User("chai",'chai@google.com',"123")
// console.log(chai.encryptPassword())
// console.log(chai.capitalise_user())

//bts
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encryptPassword = function () {
    return `${this.password}abc`;
}
User.prototype.capitalise_user = function () {
    return `${this.username.toUpperCase()}`;
}

const tea = new User("tea", "tea@apple.com", 8989);
console.log(tea.encryptPassword());

console.log(tea.capitalise_user());