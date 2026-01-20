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

const computerChoice = getComputerChoice();

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {playRound(computerChoice, rock)});
    

