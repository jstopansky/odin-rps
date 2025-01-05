let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let computerChoice;
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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert("It's a tie!");
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore++;
            alert("You chose rock and opponnt chose scissors: You win!");
        }
        else {
            computerScore++;
            alert("You chose rock and opponent chose paper: You lose.")
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore++;
            alert("You chose paper and opponnt chose scissors: You lose.");
        }
        else {
            humanScore++;
            alert("You chose paper and opponent chose rock: You win!")
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanScore++;
            alert("You chose scissors and opponnt chose paper: You win!");
        }
        else {
            computerScore++;
            alert("You chose scissors and opponent chose rock: You lose.")
        }
    }
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

playRound(humanChoice, computerChoice);
console.log(`Your score is: ${humanScore}`);
console.log(`Your opponent's score is: ${computerScore}`);