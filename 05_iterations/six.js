// const coding=["js","ruby","java","python","cpp"]

// const values=coding.forEach(  (item) =>{
//     // console.log(item);
//     return item
// })
// console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 4) //callback +condition
// console.log(newNums);

// const newNums = myNums.filter( (num) => { //{}scope =>return 
//     return num > 4
// }) //callback +condition

const newNums = []

myNums.forEach( (num) => {
    if(num>4){
        newNums.push(num)
    }
})

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Fiction', publish: 1991, edition: 2005 },
    { title: 'Book Nine', genre: 'Science', publish: 2001, edition: 2012 },
    { title: 'Book Ten', genre: 'Non-Fiction', publish: 1995, edition: 2009 }
];
let userBooks=books.filter( (b) => b.genre==='History')

userBooks=books.filter( (b) => {
    return b.publish>=2000 && b.genre==='Science'
})

console.log(userBooks)