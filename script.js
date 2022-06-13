let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(currentHumanGuess, computerGuess, target) {
    return Math.abs(currentHumanGuess - target) < Math.abs(computerGuess - target);
}

function updateScore(winner) {
    if(winner === 'human') {
     humanScore =+ 1;
    } else {
        computerScore =+ 1;
    }
    console.log(humanScore);
    console.log(computerScore);
}
