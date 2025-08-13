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

function checkRandomness(){
    let rock = 0;
    let paper = 0;
    let scissors = 0;

    for (let i = 0; i < 100; i++) {
        let randomChoice = getComputerChoice();
        if (randomChoice === "rock") {
            rock++;
        }
        if (randomChoice === "paper") {
            paper++;
        }
        if (randomChoice === "scissors") {
            scissors++;
        }  
    }
    console.log(rock, paper, scissors);
    if (rock + paper + scissors === 100) {
        console.log("The random function is working correctly.");
    } else {
        console.log("The random function is not working correctly.");
    }
}

checkRandomness();

function getHumanChoice() {
    humanChoice = prompt("Please enter your choice: rock, paper, or scissors.");
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

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