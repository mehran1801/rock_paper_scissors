const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button');


let userChoice; 
let computerChoice;
let result;



possibleChoices.forEach(choice=>{
    choice.addEventListener('click',e=>{
       userChoice = e.target.id;
       userChoiceDisplay.innerHTML = userChoice;
       generateComputerChoice()
       determineWinner();

    })
})


function generateComputerChoice (){
    const random = Math.floor(Math.random()*possibleChoices.length)+1;

    if(random===1)  computerChoice = 'rock'
    if(random===2)  computerChoice = 'paper'
    if(random===3)  computerChoice = 'scissors'
    computerChoiceDisplay.innerHTML = computerChoice;
}

function determineWinner(){

    if(userChoice===computerChoice){
     resultDisplay.innerHTML ="The game was a tie!";
    }
    if(computerChoice==='rock' && userChoice==='paper'){
     resultDisplay.innerHTML ="You win!";
    }
    if(computerChoice==='rock' && userChoice==='scissors'){
     resultDisplay.innerHTML ="You lost!";
    }
    if(computerChoice==='paper' && userChoice==='scissors'){
     resultDisplay.innerHTML ="You win!";
    }
    if(computerChoice==='paper' && userChoice==='rock'){
     resultDisplay.innerHTML ="You lost!";
    }
    if(computerChoice==='scissors' && userChoice==='rock'){
     resultDisplay.innerHTML ="You win!";
    }
    if(computerChoice==='scissors' && userChoice==='paper'){
     resultDisplay.innerHTML ="You lost!";
    }

}
