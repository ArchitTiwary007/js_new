class User{
    constructor(email, password) {
        this.email = email,
        this.password=password
    }
    //getter
    get password() {
        // return this.password.toUpperCase()
        // return this._password.toUpperCase()//new obj ya property bana do tb run hoga!!

        return `${this._password}archit`
    }
    //setter

    set password(val) {
        // RangeError: Maximum call stack size exceeded
        // this.password=this.val
        // this.password=val.toUpperCase()

        this._password=val.toUpperCase()//new object
    }


    get email() {
        // return `${this._email,toUpperCase()}`
        return this._email.toUpperCase()
    }
    set email(value) {  //setter mein "_" nhi use krte hain!!
        this._email = value
    }
}

const akki = new User("akki@ai.com", "abc")
console.log(akki.password);
console.log(akki.email);
