function getComputerChoice() {
    let RandomNumb = Math.random();
    if (RandomNumb <= 1/3) {
        return "rock";
    } else if (RandomNumb <= 2/3 && RandomNumb >= 1/3) {
        return "paper";
    } else if (RandomNumb <= 1 && RandomNumb >= 2/3) {
        return "scissors"
    }
}

function checkRandomness(iterations = 100) {
    let rock = 0;
    let paper = 0;
    let scissors = 0;
    let invalid = 0;

    for (let i = 0; i < iterations; i++) {
        let randomChoice = getComputerChoice();
        if (randomChoice === "rock") {
            rock++;
        } else if (randomChoice === "paper") {
            paper++;
        } else if (randomChoice === "scissors") {
            scissors++;
        } else {
            invalid++;
        }
    }

    console.log(`rock: ${rock}, paper: ${paper}, scissors: ${scissors}`);

    if (invalid === 0) {
        console.log("The random function is working correctly.");
    } else {
        console.log(`The random function returned ${invalid} invalid value(s).`);
    }
}

checkRandomness();

function getHumanChoice() {
    let humanChoice = prompt("Please enter your choice: rock, paper, or scissors.");
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    } else {
        console.log("Invalid input. Please choose rock, paper, or scissors.");
    }
}

function playGame() {
    for (let i = 1; i < 6; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log("Round ", i);
        playRound(humanSelection, computerSelection);
        console.log("Your score", humanScore, " ", "Computer score", computerScore);
    }

}

playGame()