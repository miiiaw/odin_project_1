// Store chioce in variable
let playerSelection = prompt("What's your weapon?");

// Function returning random sign as computers choice
function getComputerChoice() {
    let signs = ["rock", "paper", "scissors"]
    return signs[Math.floor(Math.random() * signs.length)]
}

// Function that compare selections and return strings
function playRound(playerSelection) {

    // Run function for computer chioce, store in variable
    let computerSelection = getComputerChoice()


    if(playerSelection === computerSelection) {
        return "Tie"
        // Code tie
    }
    else if(playerSelection === "rock" && computerSelection === "scissors" || 
    playerSelection === "scissors" && computerSelection === "paper" || 
    playerSelection === "paper" && computerSelection === "rock") {
        return "Player wins"
        // Code player wins
    }
    else {
        return "Computer wins"
        // Code computer wins
    }
}

