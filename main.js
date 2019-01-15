let playerScore = 0;
let computerScore = 0;

const main = document.querySelector('main');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const results = document.querySelector('#results');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
const winner = document.querySelector('#winner');
const header = document.querySelector('header h1');

rock.addEventListener('click', () => {
    checkNewGame();
    results.textContent = playRound('rock', computerPlay());
    updateScore();
    checkWinner();
});

paper.addEventListener('click', () => {
    checkNewGame();
    results.textContent = playRound('paper', computerPlay());
    updateScore();
    checkWinner();
});

scissors.addEventListener('click', () => {
    checkNewGame();
    results.textContent = playRound('scissors', computerPlay());
    updateScore();
    checkWinner();
});

function checkNewGame() {
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        header.textContent = "Rock, Paper, Scissors";
    }
}

function checkWinner() {
    if (playerScore === 5) {
        header.textContent = 'You win!';
    }
    if (computerScore === 5) {
        header.textContent = 'You lose.';
    }
}

function updateScore() {
    player.textContent = playerScore;
    computer.textContent = computerScore;
}

function rollD3() {
    return Math.floor(3 * Math.random()) + 1;
}

function computerPlay() {
    d3Result = rollD3();
    return (d3Result == 1) ? 'rock' :
            (d3Result == 2) ? 'paper' :
            'scissors';
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