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
    let winner;
    if (humanChoice === computerChoice) {
        alert("It's a tie!");
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            winner = "human";
            alert("You chose rock and opponnt chose scissors: You win this round!");
        }
        else {
            winner = "computer";
            alert("You chose rock and opponent chose paper: You lose this round.")
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            winner = "computer";
            alert("You chose paper and opponnt chose scissors: You lose this round.");
        }
        else {
            winner = "human";
            alert("You chose paper and opponent chose rock: You win this round!")
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            winner = "human";
            alert("You chose scissors and opponnt chose paper: You win this round!");
        }
        else {
            winner = "computer";
            alert("You chose scissors and opponent chose rock: You lose this round.")
        }
    }
    return winner;
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    for (gameCount = 0; gameCount < 5; gameCount++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        let roundWinner = playRound(humanChoice, computerChoice);
        if (roundWinner === "human") {
            humanScore++;
        }
        else if (roundWinner === "computer") {
            computerScore++;
        }
    }
    
    console.log(`Final score \n You: ${humanScore} \n Opponent: ${computerScore}`)

    if (computerScore === humanScore) {
        console.log("The game a tie.")
    }
    else if (computerScore > humanScore) {
        console.log("Your opponent won.")
    }
    else {
        console.log("You won!")
    }

}

playGame();