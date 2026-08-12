//Immediately Invoked Function Expressions(IIFE)

//To write two iifes in a file one must have ';' in its ending!!

(function chai()
{
    //named iife
    console.log(`DB Connected!!`);
})();

// (()=>{ //Arrow Function!!
//     console.log(`DB terminated`);
// })()


((name)=>{ 
    console.log(`DB connected to ${name}`);
})('archit')