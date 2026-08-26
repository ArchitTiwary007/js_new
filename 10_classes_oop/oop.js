const user = {
    username: "archit",
    loginCount: 2,
    signedIn:true,

    getUserDetails: function () {  //method
        console.log(`Username: ${this.username}`);
        // console.log(`Username: ${username}`);//=>error
        // console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);//=>node environment mein '{}' but browser mein !={}


function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
        
    }


    
    return this;//(No need: by default)
    
};


// const userOne = User("archit", 12, true)
// const userTwo=User("Chai",23,false)//Problem 
// of overwritting

//'new' keyword

//1.constructor function provides new instance or empty object is created ++ solves problem of overwritting
//2.constructor function is called
//3.this keyword gets injected into it
//4.All required data is received

const userOne = new User("archit", 34, true);
const userTwo = new User("ar", 4, false);

// console.log(userOne);
console.log(userOne.constructor);
// console.log(userTwo);
    
    


