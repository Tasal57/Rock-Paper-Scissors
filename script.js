console.log("hello world")

function getComputerChoice(a, b, c) {
    const randomNum = Math.random();
    
    
    if (randomNum < 0.33) {
        return a;
    }
    else if (randomNum < 0.66) {
        return b;
    }
    else {
        return c;
    }


}


function getHumanChoice() {
    let choice = prompt("enter rock, paper, or scissors")
    return choice
}

let humanScore = 0;
let computerScore = 0;




function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("tie")
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")) {

        humanScore+=1;
        console.log(`you win ${humanChoice} beats ${computerChoice}`)
    }
    else {
        computerScore+=1;
        console.log(`you lose ${computerChoice} beats ${humanChoice}`)
        


    }
        
}

function playGame() {

    humanScore = 0;
    computerScore = 0;

    for (i = 0; i < 5; i++) {
        const callingHumanChoice = getHumanChoice();
        const callingComputerChoice = getComputerChoice("rock", "paper", "scissors");
        playRound(callingHumanChoice, callingComputerChoice)
        console.log(`humanscore: ${humanScore}        computerscore ${computerScore}`)

        }


    if (humanScore > computerScore) {
        console.log("human wins the best of 5");
    }
    else if (humanScore < computerScore) {
        console.log("computer wins the best of 5");
    }
    else {
        console.log("it's a tie")
    }
}

playGame()