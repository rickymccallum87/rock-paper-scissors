let playerScore = 0;
let computerScore = 0;

const main = document.querySelector('main');
const display = document.querySelector('#display');
const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');

rock.textContent = 'Rock';
paper.textContent = 'Paper';
scissors.textContent = 'Scissors';

rock.addEventListener('click', () => {
    display.textContent = playRound('rock', computerPlay());
});
paper.addEventListener('click', () => {
    display.textContent = playRound('paper', computerPlay());
});
scissors.addEventListener('click', () => {
    display.textContent = playRound('scissors', computerPlay());
});

main.appendChild(rock);
main.appendChild(paper);
main.appendChild(scissors);

function rollD3() {
    return Math.floor(3 * Math.random()) + 1;
}

function computerPlay() {
    d3Result = rollD3();
    return (d3Result == 1) ? 'rock' :
        (d3Result == 2) ? 'paper' :
            (d3Result == 3) ? 'scissors' :
                'error';
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return "It's a tie."
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            computerScore++;
            return "You lose. Paper beats rock.";
        } else {
            playerScore++;
            return "You win! Rock beats scissors.";
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            playerScore++;
            return "You win! Paper beats rock.";
        } else {
            computerScore++;
            return "You lose. Scissors beats paper.";
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            computerScore++;
            return "You lose. Rock beats scissors.";
        } else {
            playerScore++;
            return "You win! Scissors beats paper.";
        }
    } else {
        return "Please enter rock, paper, or scissors.";
    }
}

function game() {
    // for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, paper, or scissors?")
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore);
    // }

    // console.log("That's five rounds and...");

    // if (playerScore > computerScore) {
    //     console.log("You win the game!");
    // } else if (computerScore > playerScore) {
    //     console.log("The computer wins!");
    // } else {
    //     console.log("We have a tie, folks.");
    // }

    playerScore = 0;
    computerScore = 0;
}