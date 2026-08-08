//mdn ko refer kro(strings are the most important thing)
const name="akki"
const repoCount=100
//old:conosle.log(name+repoCount+" Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const getName=new String('architt-tr')

console.log(getName[0]);
console.log(getName.__proto__);
console.log(getName.length);
console.log(getName.toUpperCase());
console.log(getName.charAt(2));//Kis index pe konsa character hai!!
console.log(getName.indexOf('i'));//Kis character ka konsa index hai!!

const newString=getName.substring(0,5)//start index and end index(ignores neagtive value)
console.log(newString)

// const anotherStr=getName.slice(0,4)
const anotherStr=getName.slice(-6,4)//revesre bhi use kr skte hai(uses negative value)
console.log(anotherStr);

const strNew="  akki  "//to remove unnecessary spaces
console.log(strNew);
console.log(strNew.trim());

const url="https://akki.com/archit%20tiwary"

console.log(url.replace('%20','#'))
console.log(url.includes('akki'))
console.log(url.includes('hello'))
console.log(getName.split('+'))
