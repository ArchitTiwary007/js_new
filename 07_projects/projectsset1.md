# Solution Code
## Project-1
```javascript
console.log("akki")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function(e) {
    console.log(e);
    console.log(e.target);//src
    if(e.target.id === 'grey'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor=e.target.id
    }
  });
});

```

## Project-2
```javascript
const form = document.querySelector('form')
//this usecase will give empty
//const height =parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function(e){
  e.preventDefault();//prevents default actions
  //string to integers
  const height = parseInt(document.querySelector('#height').value)
  const weight= parseInt(document.querySelector('#weight').value)
  const results=document.querySelector('#results')
  if(height === '' || height<0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  } else if(weight === '' || weight<0 || isNaN(weight)){
    results.innerHTML = `Please give a valid height ${weight}`;
  }
  else{
    const bmi=(weight / ((height * height)/10000)).toFixed(2)
    //show the result
    // results.innerHTML = `<span>${bmi}</span>`
    if(bmi<18.6){
      results.innerHTML=`<span>Under weight->${bmi}</span>`
    }
    else if(bmi>18.6  && bmi<24.9){
      results.innerHTML=`<span>Normal weight->${bmi}</span>`
    }
    if(bmi>24.9){
      results.innerHTML=`<span>Over weight->${bmi}</span>`
    }
  }
})

```

## Project-3
```javascript
const clock = document.getElementById('clock')

//const clock =document.querySelector('#clock')


//+++setInterval
setInterval(function(){
  let date=new Date()
  // console.log(date.toLocaleTimeString());
  clock.innerHTML=date.toLocaleTimeString();
},1000);

```

### Project-4
```javascript
let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowhigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true; //allows to play game (default)

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const g = parseInt(userInput.value);
    // console.log(g)
    validateGuess(g);
  });
}
//+++++//
function validateGuess(guess) {
  //
  if (isNaN(guess)) {
    alert('Please enter a valid number!!');
  } else if (guess < 1) {
    alert('Please enter a valid number!!');
  } else if (guess > 100) {
    alert('Please enter a number less than 100!!');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displaymsg(`Game Over. Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //check or print the nature of value
  if (guess === randomNum) {
    displaymsg(`You guess it right!!`);
    endGame();
  } else if (guess < randomNum) {
    displaymsg(`Number is tooo low!!!!`);
  } else if (guess > randomNum) {
    displaymsg(`Number is tooo high!!!!`);
  }
}

function displayGuess(guess) {
  //displays guesses
  userInput.value = '';
  guessSlot.innerHTML += ` ${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displaymsg(message) {
  //dom se interact krega
  lowhigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = ''; //resets to null
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGamebutton = document.querySelector('#newGame')
  newGamebutton.addEventListener('click',function(e){
    //Restting the values to restart the game
    randomNum=parseInt(Math.random()*100 + 1)
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''
    lowhigh.innerHTML = ''; 
    remaining.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true

  });
}

```