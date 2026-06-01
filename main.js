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
document.getElementById("rock").addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

document.getElementById("paper").addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

document.getElementById("scissors").addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});
let humanScore = 0;
let computerScore = 0;
let str = "";
let gameOver = false;
function updateUi(string) {
    let updatedString = document.querySelector("p");
    updatedString.textContent = `You ${humanScore} : ${computerScore} Computer`;
    let message = document.querySelector("#message");
    message.textContent = string;
}
function playRound(humanChoice, computerChoice) {
    if (!gameOver) {
        if (computerChoice == humanChoice) {
            str = (`Tie! Both you and the  computer picked ${computerChoice.substring(0, 1).toUpperCase()}${computerChoice.substring(1)}!`);
        }
        else if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                str = (`You lost, Paper beats Rock!`);
                computerScore++;
            }
            else {
                str = (`You won, Rock beats Scissors!`);
                humanScore++;
            }
        }
        else if (humanChoice == "paper") {
            if (computerChoice == "scissors") {
                str = (`You lost, Scissors beats Paper!`);
                computerScore++;
            }
            else {
                str = (`You won, Paper beats Rock!`);
                humanScore++;
            }
        }
        else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                str = (`You lost, Rock beats Scissors!`);
                computerScore++;
            }
            else {
                str = (`You won, Scissors beats Paper!`);
                humanScore++;
            }
        }
        if (computerScore == 5 || humanScore == 5) {
            if (humanScore === 5) {
                str = ("You won the game!");
            } else {
                str = ("Computer won the game!");
            }
            gameOver = true;
            const playAgain = document.createElement("button");
            playAgain.textContent = "Play Again";
            playAgain.addEventListener("click", () => {
                humanScore = 0;
                computerScore = 0;
                gameOver = false;
                playAgain.remove();
                updateUi("Click a button to start playing!") 
            })
            document.querySelector("#buttons").appendChild(playAgain);
        }
        updateUi(str);
    }
}