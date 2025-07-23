console.log("hello world")

function getComputerChoice(a, b, c) {
    const ramdomNum = Math.random();
    
    
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
    else if (humanchoice === "rock" && computerChoice === "scissors")
        


}