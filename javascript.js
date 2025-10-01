const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {    
    let randomChoice = Math.random();
    if (randomChoice < 0.3) {
        return rock;
    } else if (randomChoice >= 0.3 && randomChoice < 0.6) {
        return paper;
    } else {
        return scissors;
    }
}

function getHumanChoice() {
    let userChoice = prompt("Please choose rock, paper or scissors: ");
    let caseUserChoice = userChoice.toLocaleLowerCase();
    return caseUserChoice;
}


function playGame() {
    
    function playRound(computer, human) {    
        if (human === computer) {
            console.log(`You chose ${human} and the computer chose ${computer}. It's a draw.`);
        } else if (
            human === "rock" && computer === "paper" || 
            human === "scissors" && computer === "rock" ||
            human === "paper" && computer === "scissors") {
            console.log(`You chose ${human} and the computer chose ${computer}. You lose!`);
            computerScore++;
        } else {
            console.log(`You chose ${human} and the computer chose ${computer}. You win!`);
            humanScore++;
        }
    }
    
    for (let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        playRound(computerChoice, humanChoice);
        console.log(`Computer: ${computerScore}`);
        console.log(`Human: ${humanScore}`);
    }
}

playGame();

