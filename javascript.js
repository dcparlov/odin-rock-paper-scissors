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

const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));