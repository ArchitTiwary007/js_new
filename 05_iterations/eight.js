//reduce

const myNums=[1,2,3]

// const myTotal=myNums.reduce(function (acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc+currval
// },0)

//acc_val:0 ya koi aur value se initialise kro!!
const myTotal=myNums.reduce(  (acc,curr) => acc+curr,0)

// console.log(myTotal);


const cart = [
    {
        name: "Web Development",
        price: 499,
    },
    {
        name: "Data Structures & Algorithms",
        price: 599,
    },
    {
        name: "Machine Learning",
        price: 699,
    },
]

const priceToPay = cart.reduce( (acc,item) => acc + item.price,0)
console.log(priceToPay);
