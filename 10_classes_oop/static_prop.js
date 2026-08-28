class User{
    constructor(username) {
        this.username=username
    }
    logMe() {
        console.log(`UserName:${this.username}`);
    }
    static createId() {//access rok dena 
        return `123`
    }
}

const akki = new User("archit")
// console.log(akki.createId())

class Teacher extends User{
    constructor(username,email) {
        super(username)
        this.email=email
    }
}

const iphone = new Teacher("mac", "mac@gmail.com")
iphone.logMe()
console.log(iphone.createId())//Type error : access nhi kr paa rha hai!!