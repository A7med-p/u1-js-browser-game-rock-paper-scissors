/*-------------------------------- Constants --------------------------------*/
const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')
const resultDisplayEl = document.querySelector('#result-display')
/*-------------------------------- Variables --------------------------------*/
let computerChoice;
let num ;
/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getcomputerChoice (){
    num = getRandomInt(3);
   console.log(num)
   if(num===0){
    computerChoice = "scissors";
   }else if (num === 1){
    computerChoice = "rock";
   }else if(num === 2){
    computerChoice = "paper";
   }
}
/*----------------------------- Event Listeners -----------------------------*/
rockButton.addEventListener('click',()=>{
   getcomputerChoice()

    if(computerChoice == 'rock'){
        resultDisplayEl.textContent = `You chose rock and the computer chose ${computerChoice}. no one win's`;
    }else if(computerChoice == 'paper'){
        resultDisplayEl.textContent = `You chose rock and the computer chose ${computerChoice}. you lose`;
    }else{
        resultDisplayEl.textContent = `You chose rock and the computer chose ${computerChoice}. you win`;
    }
})

scissorsButton.addEventListener('click',()=>{
   getcomputerChoice()

    if(computerChoice == 'scissors'){
        resultDisplayEl.textContent = `You chose scissors and the computer chose ${computerChoice}. no one win's`;
    }else if(computerChoice == 'rock'){
        resultDisplayEl.textContent = `You chose scissors and the computer chose ${computerChoice}. you lose`;
    }else{
        resultDisplayEl.textContent = `You chose scissors and the computer chose ${computerChoice}. you win`;
    }
})

paperButton.addEventListener('click',()=>{
   getcomputerChoice()

    if(computerChoice == 'paper'){
        resultDisplayEl.textContent = `You chose paper and the computer chose ${computerChoice}. no one win's`;
    }else if(computerChoice == 'scissors'){
        resultDisplayEl.textContent = `You chose paper and the computer chose ${computerChoice}. you lose`;
    }else{
        resultDisplayEl.textContent = `You chose paper and the computer chose ${computerChoice}. you win`;
    }
})