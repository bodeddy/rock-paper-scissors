function getComputerChoice() {
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";
    
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