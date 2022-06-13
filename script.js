let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(currentHumanGuess, computerGuess, target) {
    const humanDifference = Math.abs(target - currentHumanGuess);
    const computerDifference = Math.abs(target - computerGuess);
    return humanDifference <= computerDifference;
}

function updateScore(winner) {
    if(winner === 'human') {
     humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
    console.log(humanScore);
    console.log(computerScore);
}
