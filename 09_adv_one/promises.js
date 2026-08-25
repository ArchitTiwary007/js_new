//promise creation
const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    //DB calls,network,cryptography
    setTimeout(function () {
        console.log('Async task is completed!');
        resolve() //helps to connect to '.then'
        
    },1000)
})

promiseOne.then(function () {   //=>resolve ke saath ka connection
    console.log("Promise consumed");
})

//Method-2
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
        
    },1000)
}).then(function () {
    console.log("Async 2 resolved!!");
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
})

//resolve ka sara parameter mil jaega!!
promiseThree.then(function (user){
    console.log(user);
    
})

const PromiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        // let error=false
        if (!error) {
            resolve({username:"akki",password:"123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})

//++++Just like try catch finally+++++

// PromiseFour.then().catch()
//Callback heel or chaining or error handling =>Used in DBs++++++
PromiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error); 
}).finally(function (e) {
    console.log("Finally executed");
})

const PromiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        // let error=false
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})


//Async Await using try catch
async function consumePromiseFive() {
    try {
        const response = await PromiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}
consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         console.log(response);
//         // const data = response.json()// all takes time to execute
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }
// getAllUsers()

//Method-2(above)
//This executes first!!
fetch('https://api.github.com/users/ArchitTiwary007')
    .then((response) => {
    return response.json()
    })
    .then((data) => {
        console.log(data);
        
    })
    .catch((error) => console.log(error))
