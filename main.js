function getComputerChoice() {
    let x = Math.random() * 3;
    if (x < 1) {
        return "rock";
    }
    if (x < 2) {
        return "scissors";
    }
    return "paper";
}
function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?");
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (computerChoice == humanChoice) {
        console.log(`Tie! Both you and the  computer picked ${computerChoice}`);
    }
    else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log(`You lost, Paper beats Rock!`);
            computerScore++;
        }
        else {
            console.log(`You won, Rock beats Scissors!`);
            humanScore++;
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            console.log(`You lost, Scissors beats Paper!`);
            computerScore++;
        }
        else {
            console.log(`You won, Paper beats Rock!`);
            humanScore++;
        }
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log(`You lost, Rock beats Scissors!`);
            computerScore++;
        }
        else {
            console.log(`You won, Scissors beats Paper!`);
            humanScore++;
        }
    }
}
function playGame() {
    for (let x = 0; x < 5; x++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (computerScore > humanScore) {
        console.log("The computer won the game");
    }
    else if (humanScore > computerScore) {
        console.log("You won the game");
    }
    else {
        console.log("Both you and the computer got the same score");
    }
}
playGame();