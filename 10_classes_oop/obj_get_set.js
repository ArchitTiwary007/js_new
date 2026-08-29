//old model-2

const User = {
    _email: 'akki@giggle.com',
    _password:"abc",

    get email() {
        return this._email.toUpperCase()
    },
    set email(value) {
        this._email=value
    }
}

//similar work process for operations like .length
const tea = Object.create(User)
console.log(tea.email);
