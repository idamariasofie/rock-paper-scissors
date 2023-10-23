const controlButtons = document.querySelectorAll(".control-button");
const modal = document.getElementById("modal");
const userMessage = document.querySelector("#gameinstructions");


let resetButton = document.getElementById("reset");
let instructionsButton = document.getElementById("instructions");
let playNowButton = document.getElementById("play-now");
let gameImage = document.getElementById("game-board-img");
let userChoice;
let cpuChoice;




// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    // let buttons = document.getElementsByTagName("button");
    for (let button of controlButtons) {
        button.addEventListener("click", function () {
            generateUserChoice(this.getAttribute("data-type"));
            generateCpuChoice();
            calculateWinner();
            showWinningRoundImages(userChoice, cpuChoice);
            generateGameWinner();
        });
    }

});

/**
 * Instructions button opening and closing modal 
 * with game instruction text
 */
instructionsButton.addEventListener("click", () => {
    modal.style.display = "block";
});

playNowButton.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});


/**
 * Reset button settings
 */
resetButton.addEventListener("click", () => {
    location.reload();
});

/**
 * Register user's game selection 
 */
function generateUserChoice(dataType) {

    switch (dataType) {
        case "rock":
            userChoice = 1;
            break;
        case "paper":
            userChoice = 2;
            break;
        case "scissors":
            userChoice = 3;
            break;
    }

}

/**
 * Generate random number to determine Cpu selection of game
 */
function generateCpuChoice() {

    cpuChoice = Math.floor(Math.random() * 3) + 1;
}

/**
 * Check user and computer selection and determine
 * who's the winner
 */ 
function calculateWinner() {
    if (userChoice == 1 && cpuChoice == 1) {
        userMessage.innerHTML = "Both chose rock, it's a draw";
    } else if (userChoice == 2 && cpuChoice == 2) {
       userMessage.innerHTML = "Both chose paper, it's a draw";
    } else if (userChoice == 3 && cpuChoice == 3) {
        userMessage.innerHTML = "Both chose scissors, it's a draw";
    } else if (userChoice == 1 && cpuChoice == 3) {
        userMessage.innerHTML = "You win with rock, CPU chose scissors";
        incrementUserScore();
    } else if (userChoice == 1 && cpuChoice == 2) {
        userMessage.innerHTML = "CPU wins with rock, you chose scissors";
        incrementCpuScore();
    } else if (userChoice == 2 && cpuChoice == 3) {
        userMessage.innerHTML = "CPU wins with scissors, you chose paper";
        incrementCpuScore();
    } else if (userChoice == 2 && cpuChoice == 1) {
        userMessage.innerHTML = "You win with paper, CPU chose rock";
        incrementUserScore();
    } else if (userChoice == 3 && cpuChoice == 1) {
        userMessage.innerHTML = "CPU wins with rock, you chose scissors";
        incrementCpuScore();
    } else if (userChoice == 3 && cpuChoice == 2) {
       userMessage.innerHTML = "You win with scissors, CPU chose paper";
        incrementUserScore();
    }
}

/**
 * Increment user and computer score after each win
 */
function incrementUserScore() {
    let oldScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++oldScore;
}

function incrementCpuScore() {
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
}

/**
 * Display winning icon after each draw
 */
function showWinningRoundImages(userChoice, cpuChoice) {
let userImage = document.createElement("img");
    userImage.src = `assets/images/${userChoice}.png`;
    userImage.classList.add("completedAction");

let cpuImage = document.createElement("img");
    cpuImage.src = `assets/images/${cpuChoice}.png`;
    cpuImage.classList.add("completedAction");

    if(userChoice === cpuChoice) {
        gameImage.src = `assets/images/${userChoice}.png`;
    } else if (cpuChoice === userChoice) {
        gameImage.src = `assets/images/${cpuChoice}.png`;
    } else if (userChoice === incrementUserScore) {
        
    }
}

/**
 * Check if user or CPU have reached 10 wins
 * to end game
 */
function generateGameWinner() {
    let userScore = parseInt(document.getElementById("user-score").innerText);
    let cpuScore = parseInt(document.getElementById("computer-score").innerText);

    if (userScore === 10 && cpuScore < 10) {
        userMessage.innerHTML = "YOU WIN!";
    } else if (userScore < 10 && cpuScore === 10) {
        userMessage.innerHTML = "COMPUTER WINS!";
    }
}

