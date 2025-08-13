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
    return prompt("Please enter your choice: rock, paper, or scissors.");;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    
}