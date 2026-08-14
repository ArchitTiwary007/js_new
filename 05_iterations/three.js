//for of loop

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greets="Hello World"
for (const g of greets) {
    // console.log(`Each char is ${g}`)
}

//Maps

const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('JAP',"Japan")

// console.log(map);

for (const [key,value] of map) {//only keys or val
    console.log(key,':-',value);
}

const games={ //objects are not iteratable through this mtd. but MAPS are!!)
    'game1':'NFS',
    'game2':'GTA'
}

for (const [key,value] of games) {
    console.log(key,':-',value);
}

