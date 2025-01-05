function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        computerChoice = "rock";
    }
    else if (randomNumber === 1) {
        computerChoice = "paper";
    }
    else if (randomNumber === 2) {
        computerChoice = "scissors";
    }
    else {
        computerChoice = "invalid";
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice;
    let choiceIsValid = false;
    while (!choiceIsValid) {
        const userInput = prompt("Choose one: Rock, Paper, or Scissors");
        const lowerInput = userInput.toLowerCase();
        if (lowerInput === "rock" || lowerInput === "paper" || lowerInput === "scissors") {
            humanChoice = lowerInput;
            choiceIsValid = true;
        }
        else {
            alert("Invalid selection, please try again.");
        }
    }
    return humanChoice;
}

let computerScore;
let humanScore;

console.log(getComputerChoice());
console.log(getHumanChoice());