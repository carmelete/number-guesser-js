let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    const max = 9;
    const min = 0;
    return Math.floor(Math.random() * (max - min)) + min;
}
