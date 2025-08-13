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
        let RandomChoice = getComputerChoice();
        if (RandomChoice === "rock") {
            rock++;
        }
        if (RandomChoice === "paper") {
            paper++;
        }
        if (RandomChoice === "scissors") {
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