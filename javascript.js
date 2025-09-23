const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

let humanScore = 0;
let computerScore = 0;
let human = getHumanChoice();
let comp = getComputerChoice();

function getComputerChoice() {    
    let randomChoice = Math.random();
    if (randomChoice < 0.3) {
        return rock;
    } else if (randomChoice > 0.3 && randomChoice < 0.6) {
        return paper;
    } else {
        return scissors;
    }
}

// console.log(getComputerChoice());

function getHumanChoice() {
    let userChoice = Number(prompt("Let's play rock, paper, scissors. For rock, type 1; for paper, type 2; and for scissors, type 3: "));
    if (userChoice === 1) {
        return rock;
    } else if (userChoice === 2) {
        return paper;
    } else if (userChoice === 3) {
        return scissors;
    } else {
        console.log("Wrong input. You had your chance and blew it.")
    }
}

// console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {    
    if (humanChoice === rock && computerChoice == paper) {
        console.log("You lose!")
    } else {
        console.log("You win!");
    }
}

console.log(playRound(human, comp));

