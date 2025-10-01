const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {    
    let randomChoice = Math.random();
    if (randomChoice < 0.5) {
        return rock;
    } else {
        return paper;
    }
}

function getHumanChoice() {
    let userChoice = prompt("Please choose rock or paper: ");
    let caseUserChoice = userChoice.toLocaleLowerCase();
    return caseUserChoice;
}

// const computerChoice = getComputerChoice();
// const humanChoice = getHumanChoice();

function playRound(computer, human) {    
    if (human === computer) {
        console.log(`You chose ${human} and the computer chose ${computer}. It's a draw.`);
    } else if (human === "rock" && computer === "paper") {
        console.log(`You chose ${human} and the computer chose ${computer}. You lose!`);
    } else {
        console.log(`You chose ${human} and the computer chose ${computer}. You win!`);
    }
}

playRound(getComputerChoice(), getHumanChoice());


console.log(typeof rock);
// console.log(typeof humanChoice);


