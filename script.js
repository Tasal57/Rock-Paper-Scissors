console.log("hello world")

const resultsDiv = document.querySelector("#results")

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


//function getHumanChoice() {
//   let choice = prompt("enter rock, paper, or scissors")
//     return choice 
// } 

let humanScore = 0;
let computerScore = 0;




function playRound(humanChoice, computerChoice) {
    let message = "";
    
    
    if (humanChoice === computerChoice) {
        message = "It's a tie!";

        
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")) {

        humanScore+=1;
        message = (`you win ${humanChoice} beats ${computerChoice}`)
    }
    else {
        computerScore+=1;
        message = (`you lose ${computerChoice} beats ${humanChoice}`)
        


    }

    resultsDiv.textContent = `${message}
    Score — Human: ${humanScore}, Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5? " you win the game!" : " Computer wins the game";
        resultsDiv.textContent += `\n${winner}`;
    }
        
}

function playGame() {

    humanScore = 0;
    computerScore = 0;

    //for (i = 0; i < 5; i++) {
       // const callingHumanChoice = getHumanChoice();
        //const callingComputerChoice = getComputerChoice("rock", "paper", "scissors");
       // playRound(callingHumanChoice, callingComputerChoice)
        //console.log(`humanscore: ${humanScore}        computerscore ${computerScore}`)

        //}


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




document.querySelector("#rock").addEventListener("click", () => {
    playRound("rock", getComputerChoice("rock", "paper", "scissors"));
})

document.querySelector("#paper").addEventListener("click", () => {
    playRound("paper", getComputerChoice("rock", "paper", "scissors"))
})

document.querySelector("#scissors").addEventListener("click", () => {
    playRound("scissors", getComputerChoice("rock", "paper", "scissors"))
})

