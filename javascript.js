// function to randomise the computer's move
const computerPlay = () => {
    const result = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random() * 3);
    return result[index];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    switch (true) {
        case (playerSelection === computerSelection) :
            return "It's a draw!";
            break;
       case (playerSelection === "Rock" && computerSelection === "Scissors") :
            return "You Win! Rock beats Scissors";
            break;
        case (playerSelection === "Rock" && computerSelection === "Paper") :
            return "You Lose! Paper beats Rock";
            break;
        case (playerSelection === "Paper" && computerSelection === "Scissors") :
            return "You Lose! Scissors beats Paper";
            break;
        case (playerSelection === "Paper" && computerSelection === "Rock") :
            return "You Win! Paper beats Rock";
            break;
        case (playerSelection === "Scissors" && computerSelection === "Paper") :
            return "You Win! Scissors beats Paper";
            break;
        case (playerSelection === "Scissors" && computerSelection === "Rock") :
            return "You Lose! Rock beats Scissors";
            break;
    }
}

function game() {
    let playerCounter = 0;
    let computerCounter = 0;

    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        let playerSelection = window.prompt("Choose a hand");
        const result = playRound(playerSelection, computerSelection);
        playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
        console.log(`Player hand: ${playerSelection}`);
        console.log(`Computer hand: ${computerSelection}`);
        if (result.search("Win") > 0) {
            playerCounter++;
            console.log("Player wins this round")
            console.log("PlayerCounter: " + playerCounter);
            console.log("ComputerCounter: " + computerCounter);    
        } else if (result.search("Lose") > 0) {
            computerCounter++;
            console.log("Computer wins this round");
            console.log("PlayerCounter: " + playerCounter);
            console.log("ComputerCounter: " + computerCounter);
        } else  {
            console.log("It's a draw");
            console.log("PlayerCounter: " + playerCounter);
            console.log("ComputerCounter: " + computerCounter);
        }
    }   
    
    if (playerCounter > computerCounter) {
        console.log("Player Wins the game!");

    } else if (playerCounter < computerCounter) {
        console.log( "Computer Wins the game!"); 
    } else console.log("It's a draw");
}
game();


/*
const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
*/
