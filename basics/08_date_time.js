//Dates

let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());

//Date=>object 

//Outputs respectively!!

// Sun Aug 09 2026 08:40:55 GMT+0000 (Coordinated Universal Time)
// Sun Aug 09 2026
// 2026-08-09T08:40:55.065Z
// 8/9/2026, 8:40:55 AM

// let myNewDate=new Date(2024,0,12)
// let myNewDate=new Date(2024,0,12,5,6)
let myNewDate=new Date("2025-01-13")
// console.log(myNewDate.toLocaleString());

let myTimestamp=Date.now()
// console.log(myTimestamp);
// console.log(myNewDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
// console.log(newDate);
// console.log(newDate.getMonth());//0=>(January)=>start
// console.log(newDate.getMonth()+1);//1=>(January)=>start
// console.log(newDate.getDay());
// console.log(newDate.getUTCDay());//0=>Sunday(start)

//'${newDate.getDay()} and the time

console.log(newDate.toLocaleString('default',{
    weekday:"narrow"
}))
