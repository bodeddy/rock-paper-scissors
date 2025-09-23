// Plan for rock, paper, scissors

// simple version:

// player to input rock or paper

let userChoice = prompt("Please choose rock or paper: ");

console.log(userChoice);


// computer to randomly choose rock or paper

let compChoice = Math.random();
if (compChoice < 0.5) {
    compChoice = "rock";
    } else {
    compChoice = "paper";
}

console.log(compChoice);

// if player rock and computer rock, draw

if (userChoice === compChoice) {
    console.log(`You both chose ${userChoice}. It's a draw.`);
} else if (userChoice === "rock" && compChoice === "paper") {
    console.log("Unlucky. You lose.");
} else {
    console.log("You win!");
}

// if player rock and computer paper, computer wins

// if player paper and computer rock, player wins

// declare winner