/*
let userChoice;
let compChoice;

// player to input rock or paper
function getHumanChoice() {
    let userChoice = prompt("Please choose rock or paper: ");
    console.log(userChoice);
}

// computer to randomly choose rock or paper

function getComputerChoice() {
    let compChoice = Math.random();
    if (compChoice < 0.5) {
        compChoice = "rock";
        } else {
        compChoice = "paper";
    }
    console.log(compChoice);
}

// if player rock and computer rock, draw
function playRound(human, comp) {
    if (human === comp) {
        console.log(`You both chose ${userChoice}. It's a draw.`);
    } else if (human === "rock" && comp === "paper") {
        console.log("Unlucky. You lose.");
    } else {
        console.log("You win!");
    }
}

// if player rock and computer paper, computer wins

// if player paper and computer rock, player wins

// Increase score for winner

// declare winner

// initiate code

let humanSelection = getHumanChoice();
let compSelection = getComputerChoice();

playRound(humanSelection, compSelection);

*/


let human = "rock";
let comp = "paper";

if (human === comp) {
    console.log("Draw");
} else if (human === "rock" && comp === "paper") {
    console.log("You lose");
} else {
    console.log("You win");
}