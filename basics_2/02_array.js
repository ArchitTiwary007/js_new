const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros);//=>array ke ander array aa jaega

// console.log(marvel_heros);//
// console.log(marvel_heros[3][1]);

// const allHeros=marvel_heros.concat(dc_heros)//normal array to just adds elements
// console.log(allHeros);

// const all_new_heros=[...marvel_heros, ...dc_heros]//"spread" operation mostly used in place of concat
// console.log(all_new_heros);

// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_array=another_array.flat(Infinity)//spreads out automatically
// console.log(real_array);

console.log(Array.isArray("Akki"))//checks 
console.log(Array.from("Akki"))//create an array of given strings
console.log(Array.from({name:"akki"}))//intersting case +++++++++

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));//creates array using "of"