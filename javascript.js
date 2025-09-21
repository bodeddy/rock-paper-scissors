const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

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

console.log(getComputerChoice());


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

console.log(getHumanChoice());