//const tinderUser=new Object()
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"some@hotmail.com",
    fullname:{
        userfullname:
        {
            firstname:"kamado",
            lastname:"tanjiro"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}

// const obj3=Object.assign({},obj1,obj2)//+++++++++Interesting+++++++++assign(target,source)


const obj3={...obj1,...obj2}
// console.log(obj3);

const users=[  //Array of objects
    {
        id:1,
        email:"akki@gmail.com"
    },
    {
        id:2,
        email:"h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));