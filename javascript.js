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

const messageDiv = document.querySelector("#messages");
const displayDiv = document.createElement("div");
    
function playRound(computer, human) { 
    if (human === computer) {
        messageDiv.appendChild(displayDiv);
        displayDiv.textContent = `You chose ${human} and the computer chose ${computer}. It's a draw. Score: ${humanScore} : ${computerScore}`;
    } else if (
        human === "rock" && computer === "paper" || 
        human === "scissors" && computer === "rock" ||
        human === "paper" && computer === "scissors") {
        messageDiv.appendChild(displayDiv);
        displayDiv.textContent = `You chose ${human} and the computer chose ${computer}. You lose! Score: ${humanScore} : ${computerScore}`;
        computerScore++;
    } else {
        messageDiv.appendChild(displayDiv);
        displayDiv.textContent = `You chose ${human} and the computer chose ${computer}. You win! Score: ${humanScore} : ${computerScore}`;
        humanScore++;
    }

    if (humanScore === 5) alert("Finally! You've gotten to 5!")

}

// const computerChoice = getComputerChoice();

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => {playRound(getComputerChoice(), rock)});
paperButton.addEventListener("click", () => {playRound(getComputerChoice(), paper)});
scissorsButton.addEventListener("click", () => {playRound(getComputerChoice(), scissors)});



